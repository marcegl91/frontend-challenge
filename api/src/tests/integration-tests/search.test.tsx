import request from 'supertest'
import { app } from '../../app'

import mockSearchResponseIn from '../mocks/search_in.json'
import mockSearchResponseOut from '../mocks/search_out.json'

import axios from 'axios'

jest.mock('axios')

const mAxiosGet = jest.mocked(axios.get)

test('GET /api/items should return parsed items correctly', async () => {
  mAxiosGet.mockResolvedValue({ data: mockSearchResponseIn })
  const response = await request(app).get('/api/items?q=apple+iphone')

  expect(response.body).toEqual(mockSearchResponseOut)
})
