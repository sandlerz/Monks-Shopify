import { ApiConfig, Product, Variables } from '@types'
import { getProductQuery, normalizeProduct } from 'shopify/utils'
import { Product as ShopifyProduct } from 'shopify/schema'

type FetchType = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}

const getProduct = async (options: {
  config: ApiConfig
  variables: Variables
}): Promise<ReturnType> => {
  const { config, variables } = options
  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    variables
  })

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null
  }
}

export default getProduct
