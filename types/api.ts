import { ApiHooks } from './hooks'

export type Variables = { [key: string]: string | undefined | any }

export type ApiFetcherOptions = {
  query: string
  variables?: Variables
}

export type ApiFetcherResults<T> = {
  data: T
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
  cartId: string
}

export interface ApiProviderContext {
  fetcher: ApiFetcher
  hooks: ApiHooks
  cartId: string
}
