import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { searchByQuery } from './helpers/search_by_query'
import { getItemById } from './helpers/item_by_id'

dotenv.config()

export const app: Express = express()
app.use(cors())

app.get('/api/items', async (req: Request, res: Response) => {
  const { q } = req.query

  if (typeof q !== 'string') {
    throw new Error("Query param 'query' has to be of type string")
  }

  const response = await (searchByQuery(q))

  res.send(response)
})

app.get('/api/items/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  const response = await (getItemById(id))

  res.send(response)
})
