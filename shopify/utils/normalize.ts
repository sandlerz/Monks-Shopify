import {
  Collection as ShopifyCollection,
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductVariantConnection
} from '../schema'
import { Cart, Collection, Discount, LineItem, Product } from '@types'

// Normalice Product

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) => {
  if (!edges.length)
    return [{ url: '/assets/images/util/image-place-holder.png' }]

  return edges.map(
    ({ node: { originalSrc: url, height, width, ...rest } }) => ({
      url,
      height,
      width,
      ...rest
    })
  )
}

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode
})

const normalizeCtaLabel = (
  availableForSale: boolean,
  tags: string[]
): string => {
  let label = 'QUICK ADD'

  if (!availableForSale) label = 'SOLD OUT'

  if (tags.some((tag) => tag === 'coming soon')) label = 'COMING SOON'

  return label
}

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node

    return {
      id,
      name: title,
      sku: sku ?? id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      options: selectedOptions.filter((option) => option.name !== 'Title')
    }
  })
}

const normalizeProductSellingPlanGroups = (item: any) => {
  if (!item || !item.edges.length) return null
  const { node } = item.edges[0]

  const sellingPlans = node.sellingPlans.edges.map(
    ({ node: { id, options } }: any) => ({
      sellingPlanId: id,
      value: options[0].value.replace(/[{()}]/g, '')
    })
  )

  return {
    sellingPlans,
    percentageDiscount:
      node.sellingPlans.edges[0].node.priceAdjustments[0].adjustmentValue
        .adjustmentPercentage
  }
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    description,
    images: imageConnection,
    priceRange,
    totalInventory,
    options,
    variants,
    availableForSale,
    productType,
    sellingPlanGroups,
    ingredients,
    application,
    subtitle,
    productSize,
    tags,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    description: description ?? '',
    totalInventory,
    availableForSale,
    ctaLabel: normalizeCtaLabel(availableForSale, tags),
    productType: productType.toLowerCase(),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options ? options.filter((option) => option.name !== 'Title') : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    sellingPlanGroups: normalizeProductSellingPlanGroups(sellingPlanGroups),
    ingredients: ingredients ?? null,
    application: application ?? null,
    subtitle: subtitle ?? null,
    productSize: productSize ?? null,
    ...rest
  }

  return product
}

// Normalize Cart

const normalizeLineItem = ({
  node: { merchandise, quantity, id: idLine, sellingPlanAllocation }
}: any): LineItem => {
  const { id, sku, priceV2, image, product } = merchandise

  return {
    name: product.title ?? sku,
    variantId: String(id),
    productId: String(product.id),
    lineId: String(idLine),
    quantity,
    price: priceV2.amount,
    image: {
      url: image.url
    },
    sellingPlan: sellingPlanAllocation && {
      sellingPlanPrice: sellingPlanAllocation?.checkoutChargeAmount.amount,
      sellingPlanValue:
        sellingPlanAllocation?.sellingPlan.options[0].value.replace(
          /[{()}]/g,
          ''
        )
    }
  }
}

const normalizeDiscount = (
  discountCodes: any,
  discountAllocations: any
): Discount => {
  const amount = discountAllocations[0]?.discountedAmount.amount

  return {
    ...discountCodes[0],
    amount: +amount || 0
  }
}

export const normalizeCart = (cart: any): Cart => {
  const {
    id,
    cost: { subtotalAmount, totalAmount },
    lines,
    totalQuantity,
    discountCodes,
    discountAllocations
  } = cart

  return {
    id,
    subtotalPrice: Number(subtotalAmount.amount),
    totalPrice: Number(totalAmount.amount),
    lineitems: lines.edges.map(normalizeLineItem),
    totalQuantity,
    discount: normalizeDiscount(discountCodes, discountAllocations)
  }
}

// Normalize Shop

export const normalizeCollection = (
  collection: ShopifyCollection
): Collection => {
  const { title, comingSoon } = collection
  
  return {
    title: title.toLowerCase(),
    comingSoon: comingSoon ?? null
  }
}
