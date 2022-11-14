export const cartDetailFragment = `
  id
  checkoutUrl
  createdAt
  totalQuantity
  lines(first: 10) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            sku
            priceV2 {
              amount
            }
            image {
              url
            }
            product {
              title
              id
            }
          }
        }
        sellingPlanAllocation {
          checkoutChargeAmount {
            amount
          }
          sellingPlan {
            options {
                value
            }
          }
        }
      }
    }
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
  }
  discountCodes {
    code
    applicable
  }
  discountAllocations {
    discountedAmount {
      ...on MoneyV2 {
        amount
      }
    }
  }
  
`
