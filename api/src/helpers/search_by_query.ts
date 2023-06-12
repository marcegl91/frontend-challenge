import axios from 'axios'
import { type SearchInResponse, type Result, type Filter } from '../types/in/search_response'
import { type SearchOutResponse, type Item } from '../types/out/search_response'

const resultToItem = (r: Result): Item => {
  return {
    id: r.id,
    title: r.title,
    price: {
      currency: r.currency_id,
      amount: Math.floor(r.price),
      decimals: parseFloat((r.price % 1).toFixed(2)) * 100
    },
    picture: r.thumbnail,
    condition: r.condition,
    free_shipping: r.shipping.free_shipping,
    state: r.seller_address.state.name
  }
}

const getBreadcrumbs = (filters: Filter[]): string[] => {
  const categories = filters.filter(f => f.id === 'category')[0]?.values[0]?.path_from_root

  if (categories === undefined) { return [] }

  return categories.map(c => c.name)
}

const transformData = async (response: SearchInResponse): Promise<SearchOutResponse> => {
  return {
    author: {
      name: process.env.NAME as string,
      lastname: process.env.LASTNAME as string
    },
    categories: getBreadcrumbs(response.filters),
    items: response.results.map(r => resultToItem(r))
  }
}

export const searchByQuery = async (query: string): Promise<SearchOutResponse | string> => {
  try {
    const { data } = await axios.get<SearchInResponse>(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    )

    return await transformData(data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error message: ', error.message)
      return error.message
    } else {
      console.log('Unexpected error: ', error)
      return 'An unexpected error occurred'
    }
  }
}
