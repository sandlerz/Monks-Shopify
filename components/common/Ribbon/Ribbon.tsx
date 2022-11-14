import React from 'react'

import styles from './styles.module.scss'

interface Props {
  text: string
}

export const Ribbon = ({ text }: Props): JSX.Element => {
  return <div className={styles.ribbonContainer}>{text}</div>
}
