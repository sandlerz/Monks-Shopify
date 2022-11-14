import { cartDetailFragment } from '../commonFragments'

const cartLinesUpdateMutation = `
  mutation($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
export default cartLinesUpdateMutation
