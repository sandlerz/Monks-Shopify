import { cartDetailFragment } from '../commonFragments'

const cartLinesAddMutation = `
  mutation cartLinesAdd(
    $cartId: ID!,
    $lines: [CartLineInput!]! ) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
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

export default cartLinesAddMutation
