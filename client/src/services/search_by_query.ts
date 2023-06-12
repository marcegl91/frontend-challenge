import axios from 'axios'
import { type SearchResponse } from '../types/search_response'

export const searchByQuery = async (id: string): Promise<SearchResponse | string> => {
  try {
    const { data } = await axios.get<SearchResponse>(
      `${process.env.REACT_APP_API_BASE_URL as string}/api/items?q=${id}`
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
