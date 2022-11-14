import { ApiProviderContext } from '@types'
import { createContext, ReactNode, useContext, useMemo } from 'react'
import { getConfig } from 'shopify/api/config'
import { shopifyHooks } from 'shopify/hooks'

export const ApiContext = createContext<Partial<ApiProviderContext>>({})

interface Props {
  children: ReactNode | ReactNode[]
}

export const ApiProvider = ({ children }: Props): JSX.Element => {
  const { fetch, cartId } = getConfig()

  const config = useMemo(
    () => ({
      fetcher: fetch,
      hooks: shopifyHooks,
      cartId
    }),
    [fetch, cartId]
  )

  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>
}

export const useApi = () => useContext(ApiContext) as ApiProviderContext
