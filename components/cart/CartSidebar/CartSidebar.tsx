import cx from 'classnames'
import { Button, IconButton } from 'components/buttons'
import { useUI } from 'context/UIProvider'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useCart, useDiscountCodeApply } from 'shopify/cart'
import { fbpixelInitiateCheckout, priceFormat } from 'utils'
import { CartItem } from '../CartItem'

import styles from './styles.module.scss'

export const CartSidebar = (): JSX.Element | null => {
  const [discountCode, setDiscountCode] = useState('')
  const { closeRightDrawer } = useUI()
  const { data, isEmpty } = useCart()
  const applyDiscount = useDiscountCodeApply()
  const router = useRouter()

  if (!data) {
    return null
  }

  const { totalPrice, subtotalPrice, lineitems, discount } = data

  const handleContinueShopping = () => {
    closeRightDrawer()
    router.push('/shop')
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
    setDiscountCode(event.target.value)

  const handleDiscountCodeApply = () => {
    applyDiscount({ discountCodes: [discountCode] })
  }

  const handleDiscountCodeRemove = () => {
    applyDiscount({ discountCodes: [''] })
  }

  return (
    <div
      className={cx(styles.container, {
        [styles.isEmpty]: isEmpty
      })}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerInnerContainer}>
            <IconButton
              as="BUTTON"
              src="/assets/images/Icons/arrow-left-white.svg"
              onClick={closeRightDrawer}
              height={34}
              width={34}
            />
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className={styles.isEmptyContainer}>
          <span className={styles.isEmptyContainerIcon}>
            <Image
              src={'/assets/images/Icons/bag.svg'}
              alt="arrow icon"
              width={35}
              height={35}
              layout="fixed"
              objectFit="contain"
            />
          </span>
          <h2 className={styles.isEmptyHeader}>Your bag is empty.</h2>
          <Button
            label="Continue shopping"
            theme="SECONDARY"
            className={styles.isEmptyBtn}
            as="BUTTON"
            onClick={handleContinueShopping}
          />
        </div>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItemsContainer}>
            {lineitems?.map((lineItem) => (
              <CartItem key={lineItem.lineId} {...lineItem} />
            ))}
          </div>

          <div className={styles.cartCheckoutContainer}>
            <div className={styles.codeDiscountContainer}>
              {discount.applicable ? (
                <div className={styles.subtotalContainer}>
                  <span>Discount Code:</span>
                  <span
                    className={styles.removeDiscountContainer}
                    onClick={handleDiscountCodeRemove}>
                    <Image
                      src="/assets/images/Icons/close.png"
                      alt="close icon"
                      layout="fixed"
                      width={10}
                      height={10}
                      className={styles.removeDiscountBtn}
                    />
                    {discount.code}
                  </span>
                </div>
              ) : (
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Discount Code"
                    onChange={handleInput}
                    value={discountCode}
                  />
                  <IconButton
                    as="BUTTON"
                    onClick={handleDiscountCodeApply}
                    src="/assets/images/Icons/arrow-right-black.svg"
                  />
                </div>
              )}

              <div className={styles.subtotalContainer}>
                <span>Subtotal</span>
                <span>$ {priceFormat(subtotalPrice)}</span>
              </div>

              {discount.applicable && (
                <div className={styles.subtotalContainer}>
                  <span>Discount </span>
                  <span>$ {priceFormat(discount.amount)}</span>
                </div>
              )}

              {totalPrice > 30 && (
                <div className={styles.subtotalContainer}>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              )}
            </div>

            <div className={styles.totalContainer}>
              <span>Total</span>
              <span>$ {priceFormat(subtotalPrice - discount.amount)}</span>
            </div>

            <span onClick={() => fbpixelInitiateCheckout()}>
              <Button
                href="/api/checkout"
                label="Checkout"
                theme="SECONDARY"
                size="FULLWIDTH"
                as="LINK"
                className={styles.cartBtn}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
