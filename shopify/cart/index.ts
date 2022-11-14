import {
  MutationHook,
  addItemHookDescriptor,
  removeItemHookDescriptor,
  updateItemHookDescriptor,
  SWRHook,
  discountCodesUpdateDescriptor
} from '@types'
import { useApi } from 'context/ApiProvider'
import Cookies from 'js-cookie'
import { useMutationHook, useSWRHook } from 'shopify/utils'

// UseCart()

type UseCartReturn = ReturnType<SWRHook['useFetch']>

export const useCart = (): UseCartReturn => {
  const { hooks } = useApi()
  const hook = hooks.cart.useCart

  const { cartId } = useApi()

  const fetcherWrapper: typeof hook.fetcher = (context: any) => {
    context.input.cartId = Cookies.get(cartId)

    return hook.fetcher(context)
  }

  return useSWRHook({ ...hook, fetcher: fetcherWrapper })
}

// UseAddItem()

type UseAddItemReturn = ReturnType<
  MutationHook<addItemHookDescriptor>['useFetch']
>

export const useAddItem = (): UseAddItemReturn => {
  const { hooks } = useApi()
  const hook = hooks.cart.useAddItem

  return useMutationHook<addItemHookDescriptor>({ ...hook })
}

// UseUpdateItem()

type UseUpdateItemReturn = ReturnType<
  MutationHook<updateItemHookDescriptor>['useFetch']
>

export const useUpdateItem = (): UseUpdateItemReturn => {
  const { hooks } = useApi()
  const hook = hooks.cart.useUpdateItem

  return useMutationHook<updateItemHookDescriptor>({ ...hook })
}

// UseRemoveItem()

type UseRemoveItemReturn = ReturnType<
  MutationHook<removeItemHookDescriptor>['useFetch']
>

export const useRemoveItem = (): UseRemoveItemReturn => {
  const { hooks } = useApi()
  const hook = hooks.cart.useRemoveItem

  return useMutationHook<removeItemHookDescriptor>({ ...hook })
}

// UseDiscountCodeApply

type UseDiscountCodeApplyReturn = ReturnType<
  MutationHook<discountCodesUpdateDescriptor>['useFetch']
>

export const useDiscountCodeApply = (): UseDiscountCodeApplyReturn => {
  const { hooks } = useApi()
  const hook = hooks.cart.useDiscountCode

  return useMutationHook<discountCodesUpdateDescriptor>({ ...hook })
}
