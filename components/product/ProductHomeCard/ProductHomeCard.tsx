import { Product } from '@types'
import { Button } from 'components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'
import { useAddItem } from 'shopify/cart'
import { useUI } from 'context/UIProvider'
import { fbpixelAddToCart } from 'utils'
import {
  gtmProductClickEvents,
  gtmAddToCartEvents
} from 'utils/gtmTrackingEvents'
import { YotpoReviews } from 'components/YotpoReviews'

interface Props {
  product: Product
}

export const ProductHomeCard = ({ product }: Props): JSX.Element => {
  const [loadImage, setLoadImage] = useState(false)
  const { openRightDrawer } = useUI()

  const addItem = useAddItem()

  const {
    name,
    images,
    slug,
    price,
    id,
    variants,
    ctaLabel,
    description,
    productType,
    subtitle
  } = product

  const { url, alt, height, width } = images[0]

  const addToCart = async () => {
    const item = {
      productId: id,
      variantId: variants[0].id,
      quantity: 1
    }

    await addItem(item)
    openRightDrawer()
    gtmAddToCartEvents(
      name,
      variants[0].id,
      price.value,
      description,
      productType
    )
    fbpixelAddToCart()
  }

  return (
    <div className={styles.container}>
      <Link href={`/shop/${slug}`}>
        <a
          className={cx(styles.imgContainer, {
            [styles.onLoadImage]: loadImage
          })}
          onClick={() =>
            gtmProductClickEvents(name, variants[0].id, price.value, 'Home')
          }>
          <Image
            src={url}
            alt={alt || name}
            layout="fill"
            width={width || 100}
            height={height || 100}
            objectFit="cover"
            objectPosition="center"
            onLoad={() => setLoadImage(true)}
          />
        </a>
      </Link>

      <span id="homePage_Yopto">
        <YotpoReviews
          widget="bottomLine"
          id={id}
          className="yotpoShop"
          href={`/shop/${slug}/#reviews-from-email`}
        />
      </span>

      <h3 className={styles.name}>{subtitle.value}</h3>
      <span className={styles.subName}>
        {name.split(' ').splice(2).join(' ')}
      </span>
      <span className={styles.price}>${price.value}</span>

      <Button
        as="BUTTON"
        label={ctaLabel === 'QUICK ADD' ? 'Add to Cart' : ctaLabel}
        onClick={addToCart}
        size="FULLWIDTH"
        disable={ctaLabel !== 'QUICK ADD'}
        className={styles.btn}
      />
    </div>
  )
}
