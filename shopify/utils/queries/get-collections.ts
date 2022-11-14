const metafields = `
  comingSoon: metafield(namespace: "custom", key: "coming_soon") {
    value
  }
`

const getCollectionsQuery = `
  {
    collections(first: 10) {
      edges {
        node {
          title
          ${metafields}
        }
      }
    }
  }
`

export default getCollectionsQuery
