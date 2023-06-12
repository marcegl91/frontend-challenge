export interface ItemResponse {
  author: Author
  item: Item
}

export interface Author {
  name: string
  lastname: string
}

export interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  description: string
  sold_quantity: number
  breadcrumbs: string[]
}

export interface Price {
  currency: string
  amount: number
  decimals: number
}
