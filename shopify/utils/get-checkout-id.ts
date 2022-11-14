import Cookies from 'js-cookie'
import { SHOPIFY_CART_ID_COOKIE } from 'shopify/const'

export const getCartId = () => Cookies.get(SHOPIFY_CART_ID_COOKIE)
