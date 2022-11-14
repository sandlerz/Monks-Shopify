import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

import styles from './styles.module.scss'

interface commonProps {
  className?: string
  href?: string
}

type conditionalProps =
  | {
      widget: 'bottomLine'
      id?: string
      imgUrl?: never
      name?: never
      price?: never
      url?: never
      currency?: never
      load?: never
    }
  | {
      widget: 'yotpo-main-widget'
      id: string
      imgUrl: string
      name: string
      price: number
      url: string
      currency?: string
      load?: never
    }
  | {
      widget?: never
      id?: never
      imgUrl?: never
      name?: never
      price?: never
      url?: never
      currency?: never
      load: true | undefined
    }

type Props = commonProps & conditionalProps

interface PropsWrapper {
  children: React.ReactNode
  href?: string
}

const asLink = ({ children, href }: PropsWrapper) => {
  return (
    <Link href={`${href}`} passHref>
      <a>{children}</a>
    </Link>
  )
}

const None = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const YotpoReviews = ({
  className,
  href,
  id,
  imgUrl,
  name,
  price,
  url,
  widget,
  currency = 'USD',
  load
}: Props) => {
  const Wrapper = href ? asLink : None

  const idNumber = id?.replace('gid://shopify/Product/', '')

  return (
    <Wrapper href={href}>
      <div
        className={className}
        id={widget === 'yotpo-main-widget' ? 'reviews-from-email' : ''}
        style={
          load && {
            display: 'none'
          }
        }>
        <div
          className={cx(`yotpo ${load ? 'bottomLine' : widget}`, {
            [styles.sizeBottomLine]: widget === 'bottomLine'
          })}
          data-product-id={idNumber}
          data-price={price}
          data-currency={currency}
          data-name={name}
          data-url={`${url}`}
          data-image-url={imgUrl}></div>
      </div>
    </Wrapper>
  )
}
