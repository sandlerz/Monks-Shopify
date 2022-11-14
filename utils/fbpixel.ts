export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

enum Event {
  ViewContent,
  AddToCart,
  InitiateCheckout
}

type EventString = keyof typeof Event

export const fbpixel = (event: EventString, options = {}) => {
  ;(window as any).fbq('track', event, options)
}

export const fbpixelViewContent = () => {
  fbpixel('ViewContent')
}

export const fbpixelAddToCart = () => {
  fbpixel('AddToCart')
}

export const fbpixelInitiateCheckout = () => {
  fbpixel('InitiateCheckout')
}
