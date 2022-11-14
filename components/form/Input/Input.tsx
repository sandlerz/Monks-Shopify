import React from 'react'
import Image from 'next/image'
import cx from 'classnames'

import styles from './styles.module.scss'

interface Props {
  type: 'text' | 'email' | 'passworld'
  name: string
  setState: React.Dispatch<React.SetStateAction<any>>
  state: string
  placeholder: string
  isRequired?: boolean
  autoComplete?: 'off' | 'on'
  submit?: boolean
  className?: string
}

export const Input = ({
  type,
  isRequired = true,
  placeholder,
  name,
  autoComplete = 'off',
  setState,
  state,
  submit,
  className
}: Props): JSX.Element => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setState(value)
  }

  return (
    <div className={cx(styles.inputContainer, className)}>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={isRequired}
        onChange={handleInput}
        value={state}
      />
      <label htmlFor={name} className={styles.label}>
        <span
          className={cx(styles.span, {
            [styles.moveTransition]: state.length > 0
          })}>
          {placeholder}
        </span>
      </label>
      {submit && (
        <button type="submit" className={styles.icon}>
          <Image
            src={'/assets/images/networkIcons/arrow-send.svg'}
            alt="arrow icon"
            layout="responsive"
            width={100}
            height={100}
          />
        </button>
      )}
    </div>
  )
}
