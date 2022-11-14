export interface CollectionMetafield {
  value: string
}

export interface Collection {
  title: string
  comingSoon: CollectionMetafield
}

export interface Shop {
  collections: Collection[]
}
