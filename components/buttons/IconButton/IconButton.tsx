import Image from 'next/image'
import React from 'react'
import { BaseButton, ButtonType } from '../BaseButton'
import cx from 'classnames'

import styles from './styles.module.scss'

interface commonProps {
  src: string
  width?: number
  height?: number
  alt?: string
  target?: '_selft' | '_blank' | '_parent' | '_top'
  className?: string
}

type conditionalProps =
  | {
      as: 'LINK'
      href?: string
      onClick?: never
    }
  | {
      as: 'BUTTON'
      href?: never
      onClick: () => void
    }

type Props = commonProps & conditionalProps

export const IconButton = ({
  as = ButtonType.BUTTON,
  href,
  src,
  target,
  alt = 'icon',
  width = 25,
  height = 25,
  onClick,
  className
}: Props): JSX.Element => {
  return (
    <BaseButton
      as={as}
      href={href}
      target={target}
      className={cx(styles.container, className)}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}>
      <Image src={src} alt={alt} width={width} height={height} />
    </BaseButton>
  )
}
