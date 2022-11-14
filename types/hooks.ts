import { SWRResponse } from 'swr'
import { ApiFetcher, ApiFetcherOptions } from './api'
import { Cart } from './cart'

export type MutationHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>
}

export type SWRHookContext<Input, Output> = {
  useSWRData: (input: Input) => Promise<Output>
}

export type HookFercherContext<Input, Output> = {
  input: Input
  fetch: ApiFetcher<Output>
  options: ApiFetcherOptions
}

export type HookFetcherOptions = {
  query: string
}

export type HookFetcherFn<Input, Output, Data> = (
  context: HookFercherContext<Input, Output>
) => Promise<Data>

// Mutation Hook

export type mutationHookDescriptor = {
  fetcherInput: any
  fetcherOutput: any
  data: any
}

export type addItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
    sellingPlanId?: string | false
  }
  fetcherOutput: {
    cartLinesAdd: { cart: any } // TODO: Schema cartLinesAddPayload Type
  }
  data: Cart
}

export type updateItemHookDescriptor = {
  fetcherInput: {
    lineId: string
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    cartLinesUpdate: { cart: any } // TODO: Schema cartLinesAddPayload Type
  }
  data: Cart
}

export type removeItemHookDescriptor = {
  fetcherInput: {
    lineId: string
  }
  fetcherOutput: {
    cartLinesRemove: { cart: any } // TODO: Schema cartLinesAddPayload Type
  }
  data: Cart
}

export type discountCodesUpdateDescriptor = {
  fetcherInput: {
    discountCodes: string[]
  }
  fetcherOutput: {
    cartDiscountCodesUpdate: { cart: any } // TODO: Schema cartLinesAddPayload Type
  }
  data: Cart
}

export type MutationHook<
  H extends mutationHookDescriptor = mutationHookDescriptor
> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<H['fetcherInput'], H['fetcherOutput'], H['data']>
  useFetch(
    context: MutationHookContext<H['fetcherInput'], H['data']>
  ): (input: H['fetcherInput']) => Promise<H['data']>
}

// SWR Hook

export type useCartHookDescriptor = {
  fetcherInput: {
    cartId: string
  }
  fetcherOutput: {
    cart: {} // TODO: Schema cart Type
  }
  data: Cart
}

export type useDataContext = {
  swrOptions: {
    revalidateOnFocus: boolean
  }
}

export type useSWRData<Data> = (context: useDataContext) => Data

export type SWRHook<H extends useCartHookDescriptor = useCartHookDescriptor> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<H['fetcherInput'], H['fetcherOutput'], H['data']>
  useFetch(context: {
    useSWRData: useSWRData<SWRResponse<H['data']>>
  }): SWRResponse<H['data']> & { isEmpty: boolean }
}

// API Hooks

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook<addItemHookDescriptor>
    useUpdateItem: MutationHook<updateItemHookDescriptor>
    useRemoveItem: MutationHook<removeItemHookDescriptor>
    useDiscountCode: MutationHook<discountCodesUpdateDescriptor>
    useCart: SWRHook
  }
}
