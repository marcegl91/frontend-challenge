import React from 'react'

import styles from './Search.module.scss'
import { Link, useLoaderData } from 'react-router-dom'
import { searchByQuery } from '../../../services/search_by_query'

import { type SearchResponse } from '../../../types/search_response'
import SearchListItem from '../../components/SearchListItem'
import NavBar from '../../components/NavBar'
import Breadcrumb from '../../components/Breadcrumb'

interface SearchResult {
  results: string | SearchResponse
  search: string
}

export async function loader({ request }: any): Promise<SearchResult> {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')

  if (typeof search !== 'string' || search.trim().length === 0) {
    const message = search === null ? 'Null query params' : `Invalid query params: ${search}`
    throw new Error(message)
  }

  return { results: await searchByQuery(search), search }
}

export function Search(): JSX.Element {
  const { results, search } = useLoaderData() as SearchResult

  if (typeof results === 'string') {
    throw new Error('Error: ' + search)
  }

  const items = results.items.slice(0, 4)

  const searchListItems = items.map((item, i) => (
    <div key={item.id} className={styles.item}>
      <Link key={item.id} to={`/items/${item.id}`}>
        <SearchListItem key={item.id} title={item.title} price={item.price} picture={item.picture} freeShipping={item.free_shipping} state={item.state} />
      </Link>
    </div>
  ))

  return (
    <div className={styles.container}>
      <NavBar query={search} />
      <Breadcrumb breadcrumbs={results.categories} />
      <div className={styles.list}>{searchListItems}</div>
    </div >
  )
}

export default Search
