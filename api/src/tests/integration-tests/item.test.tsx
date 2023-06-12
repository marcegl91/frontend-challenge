import request from 'supertest'
import { app } from '../../app'

import mockItemResponseIn from '../mocks/item_in.json'
import mockItemDescriptionResponseIn from '../mocks/item_description_in.json'
import mockItemCategoryResponseIn from '../mocks/item_category_in.json'
import mockItemResponseOut from '../mocks/item_out.json'

import axios from 'axios'

jest.mock('axios')

const mAxiosGet = jest.mocked(axios.get)

mAxiosGet.mockImplementation(async (url) => {
  switch (url) {
    case 'https://api.mercadolibre.com/items/MLA1144350591':
      return await Promise.resolve({ data: mockItemResponseIn })
    case 'https://api.mercadolibre.com/items/MLA1144350591/description':
      return await Promise.resolve({ data: mockItemDescriptionResponseIn })
    case 'https://api.mercadolibre.com/categories/MLA1055':
      return await Promise.resolve({ data: mockItemCategoryResponseIn })
    default:
      return await Promise.reject(new Error('not found'))
  }
})

test('GET /api/items/:id should return parsed items correctly', async () => {
  const response = await request(app).get('/api/items/MLA1144350591')

  expect(response.body).toEqual(mockItemResponseOut)
})
