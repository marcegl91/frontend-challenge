import axios from 'axios'
import { type ItemOutResponse, type Item } from '../types/out/item_response'
import { type ItemInResponse } from '../types/in/item_response'
import { type DescriptionInResponse } from '../types/in/description_response'
import { type CategoryInResponse } from '../types/in/category_response'

const bodyToItem = (i: ItemInResponse, description: string, category: CategoryInResponse): Item => {
  return {
    id: i.id,
    title: i.title,
    price: {
      currency: i.currency_id,
      amount: Math.floor(i.price),
      decimals: parseFloat((i.price % 1).toFixed(2)) * 100
    },
    picture: i.pictures[0]?.url ?? i.thumbnail,
    condition: i.condition,
    free_shipping: i.shipping.free_shipping,
    description,
    sold_quantity: i.sold_quantity,
    breadcrumbs: category.path_from_root.map(c => c.name)
  }
}

const transformData = async (item: ItemInResponse, description: DescriptionInResponse, category: CategoryInResponse): Promise<ItemOutResponse> => {
  return {
    author: {
      name: process.env.NAME as string,
      lastname: process.env.LASTNAME as string
    },
    item: bodyToItem(item, description.plain_text, category)
  }
}

export const getItemById = async (id: string): Promise<ItemOutResponse | string> => {
  try {
    const [{ data: itemData }, { data: descriptionData }] = await Promise.all([axios.get<ItemInResponse>(
      `https://api.mercadolibre.com/items/${id}`
    ), axios.get<DescriptionInResponse>(
      `https://api.mercadolibre.com/items/${id}/description`
    )])

    const { data: categoryData } = await axios.get<CategoryInResponse>(
      `https://api.mercadolibre.com/categories/${itemData.category_id}`)

    return await transformData(itemData, descriptionData, categoryData)
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
