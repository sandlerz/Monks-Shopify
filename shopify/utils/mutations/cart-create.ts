import { cartDetailFragment } from '../commonFragments'

const cartCreateMutation = `
  mutation cartCreate {
    cartCreate {
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

export default cartCreateMutation
