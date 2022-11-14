import { cartDetailFragment } from '../commonFragments'

const getCartQuery = `
  query($cartId: ID!){
    cart(id: $cartId) {
      ${cartDetailFragment}
    }
  }
`

export default getCartQuery
