import { cartDetailFragment } from '../commonFragments'

const cartLinesRemoveMutation = `
  mutation($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(
      cartId: $cartId
      lineIds: $lineIds
    ) {
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
export default cartLinesRemoveMutation
