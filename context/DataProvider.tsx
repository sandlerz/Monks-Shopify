import { Shop } from '@types'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { getConfig } from 'shopify/api/config'
import { getCollections } from 'shopify/shop'

const dataContext = createContext({})

interface Props {
  children: ReactNode | ReactNode[]
}

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Shop>({} as Shop)
  const { fetch } = getConfig()

  useEffect(() => {
    const getData = async () => {
      const collections = await getCollections(fetch)

      setData({
        collections
      })
    }

    getData()
  }, [fetch])

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>
}

export const useData = () => useContext(dataContext) as Shop
