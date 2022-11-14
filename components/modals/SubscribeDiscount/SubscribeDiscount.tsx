import { Button, IconButton } from 'components/buttons'
import { useUI } from 'context/UIProvider'
import { useBreakpoint } from 'hooks'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { klaviyoSubscribe } from 'utils'

import styles from './styles.module.scss'

export const SubscribeDiscount = () => {
  const [email, setEmail] = useState('')

  const { closeModal } = useUI()
  const { isSmallBreakpoint } = useBreakpoint()

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    klaviyoSubscribe(email)
    setEmail('')
  }

  return (
    <form className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={`/assets/images/blockImages/modal-subscribe-discount${
            isSmallBreakpoint ? '-mobile' : ''
          }.png`}
          layout="fill"
          alt="subscribe background image"
          objectFit="cover"
        />
      </div>
      <h2>
        <span className={styles.bold}>Unlock 10% Off</span> Your First Order
      </h2>
      <p>
        <span className={styles.bold}>Sign up</span> to get your coupon code &
        exclusive updates about product launches, sales, and more.
      </p>
      <input
        type="email"
        placeholder="Enter your email address"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <Button
        as="SUBMIT"
        label="Get 10% Off"
        onClick={handleSubmit}
        className={styles.btn}
      />
      <IconButton
        as="BUTTON"
        onClick={closeModal}
        src="/assets/images/Icons/close.png"
        className={styles.closeBtn}
        width={20}
        height={20}
      />
    </form>
  )
}
