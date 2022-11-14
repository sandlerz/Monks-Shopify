import { cartDetailFragment } from '../commonFragments'

const cartDiscountCodesUpdateMutation = `
  mutation($cartId: ID!, $discountCodes: [String!]!) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      userErrors {
        field
        message
      }
      cart {
        ${cartDetailFragment}
      }
    }
  }
`

export default cartDiscountCodesUpdateMutation
