import { ApiConfig, Product } from '@types'
import { ProductConnection } from 'shopify/schema'
import { getAllProductsPathsQuery } from 'shopify/utils'

type ReturnType = {
  products: Pick<Product, 'slug'>[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery
  })

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle
    }
  })

  return { products }
}

export default getAllProductsPaths
