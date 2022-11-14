import { ProductOption, SelectedOption } from 'shopify/schema'

export interface ProductImage {
  url: string
  alt?: string
  height?: number | null
  width?: number | null
}

export interface ProductPrice {
  value: number
  currencyCode: 'USD' | 'EUR' | string
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  price: number
  listPrice: number
  image?: ProductImage
  requaresShipping?: boolean
  options: SelectedOption[]
}

export interface ProductMetafield {
  value: string
}

export interface SellingPlan {
  sellingPlanId: string
  value: string
}

export interface ProductSellingPlan {
  sellingPlans: SellingPlan[]
  percentageDiscount: number
}

export interface Product {
  id: string
  name: string
  availableForSale: boolean
  description: string
  descriptionHtml: string
  totalInventory: number | undefined | null
  ctaLabel: string
  slug: string
  path: string
  images: ProductImage[]
  price: ProductPrice
  options: ProductOption[]
  variants: ProductVariant[]
  productType: string
  sellingPlanGroups: ProductSellingPlan | null
  ingredients: ProductMetafield
  application: ProductMetafield
  subtitle: ProductMetafield
  productSize: ProductMetafield
}
