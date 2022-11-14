import { ProductImage } from './product'

export interface Discount {
  applicable: boolean
  code: string
  amount: number
}

export interface LineItemSellingPlan {
  sellingPlanPrice: number
  sellingPlanValue: string
}

export interface LineItem {
  name: string
  variantId: string
  productId: string
  lineId: string
  quantity: number
  price: number
  image: ProductImage
  sellingPlan: LineItemSellingPlan
}

export interface Cart {
  id: string
  subtotalPrice: number // taxes, discount excluded
  totalPrice: number // taxes, discount included
  lineitems: LineItem[]
  totalQuantity: number
  discount: Discount
}
