import React from 'react'
import { DataLegalTerms, DataLegalPrivacy } from '../dataLegal'
import { DropdownLegal } from '../DropdownLegal'

import styles from './styles.module.scss'

interface Props {
  title: string
  data: DataLegalTerms[] | DataLegalPrivacy[]
}

export const SectionLegal = ({ title, data }: Props) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.containerDropdownLegal}>
        {data.map(({ title, description }) => (
          <DropdownLegal title={title} key={title} description={description} />
        ))}
      </div>
    </section>
  )
}
