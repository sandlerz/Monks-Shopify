import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'
import { TextButton } from 'components/buttons'

export enum LayoutGrid {
  LayoutA = 'LayoutA',
  LayoutB = 'LayoutB'
}

interface Props {
  children: React.ReactNode[]
  layout: keyof typeof LayoutGrid
  className?: string
  title?: string
  ctaLabel?: string
  cta?: string
}

export const Grid = ({
  children,
  layout,
  className,
  title,
  cta,
  ctaLabel
}: Props): JSX.Element => {
  const rootClass = cx(styles.gridContainer, className)

  return (
    <div className={cx(styles.container, styles[layout])}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={rootClass}>{children}</div>
      {cta && (
        <TextButton
          href={cta}
          label={ctaLabel}
          underline
          className={styles.cta}
        />
      )}
    </div>
  )
}
