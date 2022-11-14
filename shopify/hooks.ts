import { useMemo } from 'react'
import {
  normalizeCart,
  getCartQuery,
  getCartId,
  createCart,
  cartLinesAddMutation,
  cartLinesRemoveMutation,
  cartDiscountCodesUpdateMutation
} from 'shopify/utils'
import {
  addItemHookDescriptor,
  ApiHooks,
  discountCodesUpdateDescriptor,
  MutationHook,
  removeItemHookDescriptor,
  SWRHook,
  updateItemHookDescriptor
} from 'types/hooks'
import { useCart } from './cart'
import checkoutLineItemUpdateMutation from './utils/mutations/cart-line-update'

export const handleCart: SWRHook = {
  fetcherOptions: {
    query: getCartQuery
  },
  async fetcher({ fetch, options, input: { cartId } }) {
    let cart

    if (cartId) {
      const { data } = await fetch({
        ...options,
        variables: {
          cartId
        }
      })

      cart = data.cart

      if (cart === null) {
        cart = await createCart(fetch as any)
      }
    } else {
      cart = await createCart(fetch as any)
    }

    const cartNormalized = normalizeCart(cart)

    return cartNormalized
  },
  useFetch: ({ useSWRData }) => {
    const result = useSWRData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })

    return useMemo(() => {
      return {
        ...result,
        isEmpty: (result.data?.totalQuantity ?? 0) <= 0
      }
    }, [result])
  }
}

export const handleAddItem: MutationHook<addItemHookDescriptor> = {
  fetcherOptions: { query: cartLinesAddMutation },
  fetcher: async ({ fetch, options, input }) => {
    const variables = {
      cartId: getCartId(),
      lines: [
        {
          merchandiseId: input.variantId,
          quantity: input.quantity,
          sellingPlanId: input.sellingPlanId || undefined
        }
      ]
    }

    const { data } = await fetch({
      ...options,
      variables
    })

    const cart = normalizeCart(data.cartLinesAdd.cart)

    return cart
  },
  useFetch: ({ fetch }) => {
    const { mutate: updateCart } = useCart()

    return async (input) => {
      const response = await fetch(input)
      updateCart(response, false)

      return response
    }
  }
}

export const handleUpdateItem: MutationHook<updateItemHookDescriptor> = {
  fetcherOptions: { query: checkoutLineItemUpdateMutation },
  fetcher: async ({ fetch, options, input }) => {
    const { data } = await fetch({
      ...options,
      variables: {
        cartId: getCartId(),
        lines: [
          {
            id: input.lineId,
            merchandiseId: input.variantId,
            quantity: input.quantity
          }
        ]
      }
    })

    const cart = normalizeCart(data.cartLinesUpdate?.cart)

    return cart
  },
  useFetch: ({ fetch }) => {
    const { mutate: updateCart } = useCart()

    return async (input) => {
      const response = await fetch(input)
      updateCart(response, false)

      return response
    }
  }
}

export const handleRemoveItem: MutationHook<removeItemHookDescriptor> = {
  fetcherOptions: { query: cartLinesRemoveMutation },
  fetcher: async ({ fetch, options, input: { lineId } }) => {
    const { data } = await fetch({
      ...options,
      variables: {
        cartId: getCartId(),
        lineIds: [lineId]
      }
    })

    const cart = normalizeCart(data.cartLinesRemove.cart)

    return cart
  },
  useFetch: ({ fetch }) => {
    const { mutate: updateCart } = useCart()

    return async (input) => {
      const response = await fetch(input)
      updateCart(response, false)

      return response
    }
  }
}

export const handleDiscountCodesUpdate: MutationHook<discountCodesUpdateDescriptor> =
  {
    fetcherOptions: { query: cartDiscountCodesUpdateMutation },
    fetcher: async ({ fetch, options, input: { discountCodes } }) => {
      const { data } = await fetch({
        ...options,
        variables: {
          cartId: getCartId(),
          discountCodes
        }
      })

      const cart = normalizeCart(data.cartDiscountCodesUpdate.cart)

      return cart
    },
    useFetch: ({ fetch }) => {
      const { mutate: updateCart } = useCart()

      return async (input) => {
        const response = await fetch(input)
        updateCart(response, false)

        return response
      }
    }
  }

export const shopifyHooks: ApiHooks = {
  cart: {
    useAddItem: handleAddItem,
    useUpdateItem: handleUpdateItem,
    useRemoveItem: handleRemoveItem,
    useDiscountCode: handleDiscountCodesUpdate,
    useCart: handleCart
  }
}
