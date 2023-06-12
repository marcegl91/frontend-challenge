import React from 'react'
import styles from './ItemDetail.module.scss'
import { useLoaderData } from 'react-router-dom'
import { getItemById } from '../../../services/item_by_id'

import NavBar from '../../components/NavBar'
import Breadcrumb from '../../components/Breadcrumb'
import { type ItemResponse } from '../../../types/item_response'
import Item from '../../components/Item'

export async function loader({ params }: any): Promise<ItemResponse | string> {
  return await getItemById(params.itemId)
}

export function ItemDetail(): JSX.Element {
  const { item } = useLoaderData() as ItemResponse

  return (
    <div className={styles.container}>
      <NavBar />
      <Breadcrumb breadcrumbs={item.breadcrumbs} />
      <Item title={item.title} price={item.price} picture={item.picture} description={item.description} condition={item.condition} soldQuantity={item.sold_quantity} />
    </div>
  )
}

export default ItemDetail
