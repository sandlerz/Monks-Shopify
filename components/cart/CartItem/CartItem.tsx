import { LineItem } from '@types'
import { IconButton } from 'components/buttons'
import Image from 'next/image'
import React from 'react'
import { useRemoveItem, useUpdateItem } from 'shopify/cart'
import { fbpixelAddToCart } from 'utils'

import styles from './styles.module.scss'

export const CartItem = ({
  image,
  name,
  quantity,
  lineId,
  variantId,
  price,
  sellingPlan
}: LineItem): JSX.Element => {
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem()
  const { url, alt } = image ?? {}
  const { sellingPlanPrice, sellingPlanValue } = sellingPlan ?? {}

  const handleQuantity = (value: number) => {
    if (value > 0) {
      updateItem({
        lineId,
        quantity: quantity + 1,
        variantId
      })
      fbpixelAddToCart()
    } else if (value < 0 && quantity > 1) {
      updateItem({
        lineId,
        quantity: quantity - 1,
        variantId
      })
    } else if (value < 0 && quantity === 1) {
      removeItem({ lineId })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={url ?? ''}
          alt={alt ?? `${name} image`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.body}>
        <span className={styles.name}>{name}</span>

        <div className={styles.priceContainer}>
          <span className={styles.quantityContainer}>
            <span onClick={() => handleQuantity(-1)}>-</span>
            <span className={styles.quantity}>{quantity}</span>
            <span onClick={() => handleQuantity(1)}>+</span>
          </span>
          <span className={styles.sellingPlanValue}>{sellingPlanValue}</span>
          <span className={styles.price}>$ {sellingPlanPrice || price}</span>
        </div>
      </div>

      <IconButton
        as="BUTTON"
        onClick={() => removeItem({ lineId })}
        src="/assets/images/Icons/x-white.svg"
        className={styles.deleteIcon}
      />
    </div>
  )
}
