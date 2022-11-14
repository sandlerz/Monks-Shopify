import { Container } from 'components/iu'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import Image from 'next/image'
import { getConfig } from 'shopify/api/config'
import { getAllProductsPaths, getProduct } from 'shopify/products'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { YotpoReviews } from 'components/YotpoReviews'
import { fbpixelAddToCart, fbpixelViewContent } from 'utils'
import { useEffect, useState } from 'react'
import { Button } from 'components/buttons'
import cx from 'classnames'

import styles from './styles.module.scss'
import { useUI } from 'context/UIProvider'
import { useAddItem } from 'shopify/cart'
import {
  gtmAddToCartEvents,
  gtmProductViewEvent
} from 'utils/gtmTrackingEvents'
import { Page } from 'components/common/Page'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Radio
} from '@mui/material'
import { useBreakpoint } from 'hooks'

const Product = ({
  product
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return null
  }

  const sellingPlanFirstState = product.sellingPlanGroups
    ? product.sellingPlanGroups.sellingPlans[0].sellingPlanId
    : ''

  const [count, setCount] = useState(1)
  const [selectPurchaseOption, setSelectPurchaseOption] = useState('onetime')
  const [selectSubscribeOption, setSelectSubscribeOption] = useState(
    sellingPlanFirstState
  )
  const { isSmallBreakpoint } = useBreakpoint()
  const { openRightDrawer } = useUI()
  const addItem = useAddItem()

  const {
    images,
    name,
    id,
    price,
    path,
    variants,
    descriptionHtml,
    description,
    productType,
    sellingPlanGroups,
    application,
    ingredients,
    ctaLabel,
    productSize
  } = product

  const subscriptionPrice = sellingPlanGroups
    ? (price.value / sellingPlanGroups.percentageDiscount) * price.value
    : price.value

  useEffect(() => {
    gtmProductViewEvent(name, variants[0].id, price.value, description)
    fbpixelViewContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToCart = async () => {
    const item = {
      variantId: variants[0].id,
      quantity: count,
      sellingPlanId:
        selectPurchaseOption === 'subscribe' && selectSubscribeOption
    }

    await addItem(item)
    openRightDrawer()
    setCount(1)
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
    <Page
      title={`${name} | Monks`}
      description={description}
      path={`shop/${path}`}>
      <Container
        marginTop={isSmallBreakpoint ? 110 : 150}
        maxWidth={1200}
        marginBottom={20}>
        <div className={styles.container}>
          <div className={styles.swiperContainer}>
            <Swiper
              id="pdp_swiper"
              className={styles.swiper}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation]}>
              {images.map(({ url, alt }) => (
                <SwiperSlide key={url}>
                  <Image
                    src={url}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.details}>
            <div className={styles.heading}>
              <h1 className={styles.name}>{name}</h1>
              <span>{productSize.value}</span>
            </div>

            <YotpoReviews widget={'bottomLine'} id={id} />

            <span className={styles.price}>$ {subscriptionPrice}</span>

            <div className={styles.counterContainer}>
              <span
                className={styles.counterBtn}
                onClick={() =>
                  setCount((prev) => (prev > 1 ? prev - 1 : prev))
                }>
                -
              </span>
              <span className={styles.counter}>{count}</span>
              <span
                className={styles.counterBtn}
                onClick={() => setCount((prev) => prev + 1)}>
                +
              </span>
            </div>

            {sellingPlanGroups && (
              <div>
                <div
                  className={cx(styles.subscribeContainer, {
                    [styles.checkedContainer]:
                      selectPurchaseOption === 'onetime',
                    [styles.notChecked]: selectPurchaseOption === 'subscribe'
                  })}
                  onClick={() => setSelectPurchaseOption('onetime')}>
                  <span className={styles.optionPurchaseName}>
                    <Radio
                      value="onetime"
                      checked={selectPurchaseOption === 'onetime'}
                      className={styles.radioBtn}
                    />{' '}
                    One-time purchase
                  </span>
                  <span className={styles.optionsPurchasePrice}>
                    ${price?.value}
                  </span>
                </div>

                <Accordion
                  expanded={selectPurchaseOption === 'subscribe'}
                  disableGutters={true}>
                  <AccordionSummary>
                    <div
                      className={cx(styles.subscribeContainer, {
                        [styles.checkedContainer]:
                          selectPurchaseOption === 'subscribe'
                      })}
                      onClick={() => setSelectPurchaseOption('subscribe')}>
                      <span className={styles.optionPurchaseName}>
                        <Radio
                          value="subscribe"
                          checked={selectPurchaseOption === 'subscribe'}
                          className={styles.radioBtn}
                        />{' '}
                        <span>
                          Subscribe & Save{' '}
                          <span className={styles.textGreen}>
                            {sellingPlanGroups.percentageDiscount}%
                          </span>
                        </span>
                      </span>

                      <span
                        className={cx(
                          styles.optionsPurchasePrice,
                          styles.textGreen
                        )}>
                        ${subscriptionPrice}
                      </span>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails>
                    <div className={styles.subscribeOptionsContainer}>
                      <span className={styles.subscribeOptionsTitle}>
                        DELIVERY EVERY
                      </span>

                      <div className={styles.subscribeOptions}>
                        {sellingPlanGroups.sellingPlans.map(
                          ({ value, sellingPlanId }) => (
                            <span
                              key={sellingPlanId}
                              className={cx(styles.subscribeOptionsValue, {
                                [styles.checkedContainer]:
                                  selectSubscribeOption === sellingPlanId
                              })}
                              onClick={() =>
                                setSelectSubscribeOption(sellingPlanId)
                              }>
                              {value}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}

            <Button
              as="BUTTON"
              label={ctaLabel === 'QUICK ADD' ? 'Add to Bag' : ctaLabel}
              onClick={addToCart}
              theme="SECONDARY"
              className={styles.cartBtn}
              disable={ctaLabel !== 'QUICK ADD'}
            />

            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />

            {ingredients && (
              <>
                <h3 className={styles.subtitle}>Ingredients:</h3>
                <p className={cx(styles.text, styles.ingredients)}>
                  {ingredients.value}
                </p>
              </>
            )}
            {application && (
              <>
                <h3 className={styles.subtitle}>Applications:</h3>
                <p className={styles.text}>{application.value}</p>
              </>
            )}
          </div>
        </div>

        <YotpoReviews
          widget={'yotpo-main-widget'}
          id={id}
          imgUrl={images[0].url}
          name={name}
          price={price.value}
          url={path}
        />
      </Container>
    </Page>
  )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig()
  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map((productPath) => ({
      params: { product: productPath.slug }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ product: string }>) => {
  const config = getConfig()
  const { product } = await getProduct({
    config,
    variables: { slug: params?.product }
  })

  return {
    props: {
      product
    }
  }
}
