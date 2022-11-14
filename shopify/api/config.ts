import { ApiConfig } from '@types'
import { SHOPIFY_CART_ID_COOKIE } from 'shopify/const'
import { fetchApi } from '../utils'

class Config {
  private config: ApiConfig

  constructor(config: ApiConfig) {
    this.config = config
  }

  getConfig(): ApiConfig {
    return this.config
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
  cartId: SHOPIFY_CART_ID_COOKIE
})

export const getConfig = () => configWrapper.getConfig()
