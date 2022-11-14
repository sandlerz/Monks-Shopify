import styles from './styles.module.scss'
import cx from 'classnames'
import React, { FormEvent } from 'react'
import { BaseButton, ButtonType } from '../BaseButton'

export enum ButtonTheme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY'
}

export enum ButtonSize {
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  FULLWIDTH = 'FULLWIDTH'
}

interface commonProps {
  theme?: keyof typeof ButtonTheme
  size?: keyof typeof ButtonSize
  label: string
  className?: string
  disable?: boolean
}

type conditionalProps =
  | {
      as: 'LINK'
      href: string
      onClick?: never
    }
  | {
      as: 'BUTTON'
      href?: never
      onClick: () => void
    }
  | {
      as: 'SUBMIT'
      href?: never
      onClick: (event: FormEvent<HTMLInputElement>) => void
    }

type Props = commonProps & conditionalProps

export const Button = ({
  label,
  theme = ButtonTheme.PRIMARY,
  size = ButtonSize.MEDIUM,
  className,
  as = ButtonType.BUTTON,
  href,
  disable = false,
  onClick
}: Props): JSX.Element => {
  return (
    <BaseButton
      onClick={onClick}
      className={cx(
        styles.btnContainer,
        styles[theme],
        styles[size],
        className
      )}
      as={as}
      href={href}
      disable={disable}>
      {label}
    </BaseButton>
  )
}
