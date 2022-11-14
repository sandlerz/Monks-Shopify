import { IconButton } from 'components/buttons'
import React, { useState } from 'react'
import { DescriptionTitle } from '../dataLegal'

import styles from './styles.module.scss'

interface Props {
  title: string
  description: DescriptionTitle[]
}

export const DropdownLegal = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={styles.container_dropdownlegal}
        onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.title}>{title}</p>
        <IconButton
          src="/assets/images/Icons/add.svg"
          alt="add"
          as="BUTTON"
          onClick={() => setIsOpen(!isOpen)}
          width={16}
          height={16}
        />
      </div>
      {isOpen && (
        <div onClick={() => setIsOpen(false)}>
          {description.map(({ title, text, contain }) => {
            return (
              <div key={title}>
                {title ? (
                  <>
                    <p className={styles.titleDescription}>{title}</p>
                    {contain?.map(({ text }) => (
                      <p className={styles.description} key={text}>
                        {text}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className={styles.description} key={text}>
                    {text}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
