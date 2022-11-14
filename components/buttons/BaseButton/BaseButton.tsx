import Link from 'next/link'
import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

export enum ButtonType {
  LINK = 'LINK',
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT'
}

interface Props {
  className?: string
  children: string | JSX.Element
  as: keyof typeof ButtonType
  href?: string
  onClick?: any // TODO
  target?: string
  style?: React.CSSProperties
  disable?: boolean
}

export const BaseButton = ({
  className,
  children: label,
  href,
  as,
  target,
  onClick,
  style,
  disable = false
}: Props): JSX.Element => {
  if (as === 'LINK') {
    return (
      <Link href={`${href}`} passHref>
        <a className={cx(className, styles.container)} target={target}>
          {label}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={cx(className, styles.container)}
      id={cx({
        [styles.disable]: disable
      })}
      onClick={onClick}
      style={style}
      disabled={disable}>
      {label}
    </button>
  )
}
