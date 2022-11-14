const metafields = `
  subtitle: metafield(namespace: "custom", key: "subtitle") {
    value
  }
`

const productConnection = `
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      vendor
      handle
      description
      availableForSale
      productType
      totalInventory
      tags
      variants(first: 25) {
        edges {
          node {
            id
            title
            sku
            selectedOptions {
              name
              value
            }
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
      ${metafields}
    }
  }
`

const getAllProductsQuery = `
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      ${productConnection}
    }
  }
`

export default getAllProductsQuery
