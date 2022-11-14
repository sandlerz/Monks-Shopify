import { ApiFetcher } from '@types'
import Cookies from 'js-cookie'
import {
  SHOPIFY_CART_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE,
  SHOPIFY_COOKIE_EXPIRE
} from 'shopify/const'
import { cartCreateMutation } from './mutations'

export const createCart = async (fetch: ApiFetcher<any>): Promise<any> => {
  const { data } = await fetch({
    query: cartCreateMutation
  })

  const { cart } = data.cartCreate

  if (!cart) {
    throw new Error("Checkout can't no be created!")
  }

  const cartId = cart?.id

  if (cartId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE
    }
    Cookies.set(SHOPIFY_CART_ID_COOKIE, cartId, options)
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, cart?.checkoutUrl, options)
  }

  return cart
}
