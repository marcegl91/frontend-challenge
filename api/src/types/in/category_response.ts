export interface CategoryInResponse {
  id: string
  name: string
  picture: string
  permalink: any
  total_items_in_this_category: number
  path_from_root: PathFromRoot[]
  children_categories: any[]
  attribute_types: string
  settings: any
  channels_settings: any[]
  meta_categ_id: any
  attributable: boolean
  date_created: string
}

export interface PathFromRoot {
  id: string
  name: string
}
