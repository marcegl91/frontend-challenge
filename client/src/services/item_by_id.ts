import axios from 'axios'
import { type ItemResponse } from '../types/item_response'

export const getItemById = async (id: string): Promise<ItemResponse | string> => {
  try {
    const { data } = await axios.get<ItemResponse>(
      `${process.env.REACT_APP_API_BASE_URL as string}/api/items/${id}`
    )

    return data
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
