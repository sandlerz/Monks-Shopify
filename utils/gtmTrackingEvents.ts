export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare global {
  interface Window {
    dataLayer: any
  }
}

export const gtmTrackingEvents = (
  type: string,
  typeEvent: string,
  actionField?: Record<string, unknown>,
  data?: Record<string, unknown>
) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ ecommerce: null })
  window.dataLayer.push({
    event: type,
    ecommerce: {
      [typeEvent]: {
        actionField,
        products: [data]
      }
    }
  })
}

export const gtmProductClickEvents = (
  name: string,
  id: string,
  price: number,
  page: string
) => {
  const productDetail = {
    name,
    id,
    price
  }

  gtmTrackingEvents(
    'productClick',
    'click',
    { click: `${page} Page` },
    productDetail
  )
}

export const gtmAddToCartEvents = (
  name: string,
  id: string,
  price: number,
  description: string,
  productType: string
) => {
  const productDetail = {
    name,
    id,
    price,
    description,
    productType
  }

  gtmTrackingEvents('addToCart', 'add', {}, productDetail)
}

export const gtmProductViewEvent = (
  name: string,
  id: string,
  price: number,
  description: string
) => {
  const productDetail = {
    name,
    id,
    price,
    description
  }

  gtmTrackingEvents(
    'productView',
    'detail',
    { 'product page': name },
    productDetail
  )
}
