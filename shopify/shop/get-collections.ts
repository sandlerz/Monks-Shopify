import { CollectionConnection } from '../schema'
import { ApiConfig, Collection } from '@types'
import { getCollectionsQuery, normalizeCollection } from 'shopify/utils'

type ReturnType = {
  collections: CollectionConnection
}

const getCollections = async (
  fetcher: ApiConfig['fetch']
): Promise<Collection[]> => {
  const { data } = await fetcher<ReturnType>({
    query: getCollectionsQuery
  })

  const collections =
    data.collections.edges.map(({ node: collection }) =>
      normalizeCollection(collection)
    ) ?? []

  return collections
}

export default getCollections
