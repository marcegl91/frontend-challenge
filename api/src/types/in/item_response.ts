export interface ItemInResponse {
  id: string
  site_id: string
  title: string
  subtitle: any
  seller_id: number
  category_id: string
  official_store_id: any
  price: number
  base_price: number
  original_price: any
  currency_id: string
  initial_quantity: number
  available_quantity: number
  sold_quantity: number
  sale_terms: any[]
  buying_mode: string
  listing_type_id: string
  start_time: string
  stop_time: string
  condition: string
  permalink: string
  thumbnail_id: string
  thumbnail: string
  secure_thumbnail: string
  pictures: Picture[]
  video_id: any
  descriptions: any[]
  accepts_mercadopago: boolean
  non_mercado_pago_payment_methods: any[]
  shipping: Shipping
  international_delivery_mode: string
  seller_address: any
  seller_contact: any
  location: Location
  coverage_areas: any[]
  attributes: any[]
  warnings: any[]
  listing_source: string
  variations: any[]
  status: string
  sub_status: any[]
  tags: string[]
  warranty: string
  catalog_product_id: any
  domain_id: string
  parent_item_id: any
  differential_pricing: any
  deal_ids: any[]
  automatic_relist: boolean
  date_created: string
  last_updated: string
  health: number
  catalog_listing: boolean
  channels: string[]
}

export interface Shipping {
  mode: string
  methods: any[]
  tags: string[]
  dimensions: any
  local_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  store_pick_up: boolean
}

export interface Picture {
  id: string
  url: string
  secure_url: string
  size: string
  max_size: string
  quality: string
}
