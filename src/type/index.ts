export type method = 'get' | 'GET' | 'post' | 'POST' | 'head' | 'HEAD' | 'delete' | 'DELETE'

export interface configType {
  url: string
  method?: string
  data?: any
  params?: any
}
