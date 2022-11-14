import Link from 'next/link'
import Image from 'next/image'
import { TextButton } from 'components/buttons/TextButton'
import { YotpoReviews } from 'components/YotpoReviews'
import { fbpixelAddToCart } from 'utils'
import { useState } from 'react'
import { Product } from '@types'
import { Button } from 'components/buttons/Button'
import cx from 'classnames'

import styles from './styles.module.scss'
import { useAddItem } from 'shopify/cart'
import { useUI } from 'context/UIProvider'
import {
  gtmAddToCartEvents,
  gtmProductClickEvents
} from 'utils/gtmTrackingEvents'

interface Props {
  product: Product
}

export const ProductShopCard = ({ product }: Props): JSX.Element => {
  const [loadImage, setLoadImage] = useState(false)
  const { openRightDrawer } = useUI()

  const addItem = useAddItem()

  const {
    id,
    images,
    name,
    slug,
    price,
    variants,
    description,
    productType,
    ctaLabel
  } = product

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
            gtmProductClickEvents(name, variants[0].id, price.value, 'Shop')
          }>
          {images && (
            <Image
              alt={name ?? 'Product image'}
              src={images[0].url}
              quality="85"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
              onLoad={() => setLoadImage(true)}
            />
          )}
        </a>
      </Link>

      <div className={styles.bodyContainer}>
        <h3 className={styles.name}>{name}</h3>

        <YotpoReviews
          widget="bottomLine"
          id={id}
          className="yotpoShop"
          href={`/shop/${slug}/#reviews-from-email`}
        />

        <div className={styles.priceContainer}>
          <span className={styles.price}>${price.value}</span>
          <Button
            as="BUTTON"
            label={ctaLabel}
            onClick={addToCart}
            theme={'SECONDARY'}
            disable={ctaLabel !== 'QUICK ADD'}
          />
          <TextButton
            label={'MORE INFO'}
            href={`/shop/${slug}`}
            underline={true}
            handleOnClickGTM={() =>
              gtmProductClickEvents(name, variants[0].id, price.value, 'Shop')
            }
          />
        </div>
      </div>
    </div>
  )
}
