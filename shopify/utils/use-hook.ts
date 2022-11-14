import { ApiFetcher } from '@types'
import { useApi } from 'context/ApiProvider'
import useSWR from 'swr'
import {
  mutationHookDescriptor,
  MutationHook,
  SWRHook,
  useDataContext
} from 'types/hooks'

export const useMutationHook = <T extends mutationHookDescriptor>(
  hook: MutationHook<T>
) => {
  const { fetcher } = useApi()

  const fetch = (input: mutationHookDescriptor['fetcherInput']) =>
    hook.fetcher({
      input,
      fetch: fetcher,
      options: hook.fetcherOptions
    })

  return hook.useFetch({ fetch })
}

const useData = (
  hook: SWRHook,
  fetcher: ApiFetcher,
  contex: useDataContext
) => {
  const hookFetcher = async (query: string) => {
    return await hook.fetcher({
      fetch: fetcher,
      options: { query },
      input: {} as any
    })
  }

  const response = useSWR(
    hook.fetcherOptions.query,
    hookFetcher,
    contex.swrOptions
  )

  return response
}

export const useSWRHook = (hook: SWRHook) => {
  const { fetcher } = useApi()

  const useSWRData = (contex: useDataContext) => {
    const data = useData(hook, fetcher, contex)
    return data
  }

  return hook.useFetch({ useSWRData })
}
