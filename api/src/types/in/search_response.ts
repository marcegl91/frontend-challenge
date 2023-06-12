export interface SearchInResponse {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: any
  results: Result[]
  sort: any
  available_sorts: any[]
  filters: Filter[]
  available_filters: any[]
}

export interface Result {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: any
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: any
  sale_price: any
  sold_quantity: number
  available_quantity: number
  official_store_id: any
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  tags: string[]
  shipping: Shipping
  stop_time: string
  seller: any
  seller_address: any
  address: any
  attributes: any[]
  installments: any
  winner_item_id: any
  discounts: any
  promotions: any[]
  inventory_id: any
  variation_filters?: string[]
  variations_data?: any
  differential_pricing?: any
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  promise: any
}

export interface Filter {
  id: string
  name: string
  type: string
  values: Value[]
}

export interface Value {
  id: string
  name: string
  path_from_root?: PathFromRoot[]
}

export interface PathFromRoot {
  id: string
  name: string
}
