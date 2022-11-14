const metafields = `
  ingredients: metafield(namespace: "custom", key: "ingredients") {
    value
  }
  application: metafield(namespace: "custom", key: "application") {
    value
  }
  productSize: metafield(namespace: "custom", key: "product_size") {
    value
  }
`

const getProductQuery = `
  query productByHandle($slug: String!) {
    productByHandle(handle: $slug) {
      id
      handle
      title
      description
      descriptionHtml
      availableForSale
      productType
      totalInventory
      tags
      options {
        id
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 250) {
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
      sellingPlanGroups(first: 10) {
        edges {
          node {
            sellingPlans(first: 10){
              edges {
                node {
                  id
                  priceAdjustments {
                      adjustmentValue {
                          ... on SellingPlanPercentagePriceAdjustment {
                              adjustmentPercentage
                          }
                      }
                  }
                  options {
                      name
                      value
                  }
                }
              }
            }
          }
        }
      }    
      images(first: 250) {
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

export default getProductQuery
