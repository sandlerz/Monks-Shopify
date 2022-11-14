import { IconButton, TextButton } from 'components/buttons'
import { Input } from 'components/form'
import React, { useState } from 'react'
import { klaviyoSubscribe } from 'utils'
import cx from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'

export const Footer = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [cookiesAlert, setCookiesAlert] = useState(true)

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()
    klaviyoSubscribe(email)
    setEmail('')
  }

  return (
    <>
      <footer className={styles.footerContainer}>
        <h3 className={cx(styles.title, styles.translateForIcons)}>
          Can we help?
        </h3>
        <div className={styles.innerContainer}>
          <div className={styles.customerCare}>
            <span className={cx(styles.plainText, styles.translateForIcons)}>
              Customer Care
            </span>
            <div className={styles.contactContainer}>
              <span className={styles.emailIcon}>
                <Image
                  src="/assets/images/networkIcons/at.svg"
                  alt="Icon whatsapp"
                  height={22}
                  width={17}
                />
              </span>
              <TextButton
                href="mailto:team@monks.us"
                label="Contact Us"
                className={cx(styles.textBtn)}
              />
            </div>
            <div className={styles.contactContainer}>
              <span className={styles.whatsappIcon}>
                <Image
                  src="/assets/images/networkIcons/whatsapp.svg"
                  alt="Icon whatsapp"
                  height={22}
                  width={15}
                />
              </span>

              <TextButton
                href="https://wa.me/13109096904"
                label="Shopping Assistance via WhatsApp"
                className={cx(styles.textBtn)}
              />
            </div>
          </div>
          <div className={styles.politics}>
            <TextButton
              href="/returns"
              label="Shipping / Returns"
              className={styles.textBtn}
            />
            <TextButton
              href="/legal"
              label="Privacy Policy / Terms & Conditions"
              className={styles.textBtn}
            />
          </div>
          <div className={cx(styles.socialContainer, styles.translateForIcons)}>
            <div className={styles.plainText}>Connect with us</div>
            <div className={styles.socialIcons}>
              <IconButton
                as="LINK"
                href="https://www.instagram.com/monks/"
                src="/assets/images/networkIcons/instagram.svg"
                alt="Instagram Icon"
                target="_blank"
              />
              <IconButton
                as="LINK"
                href="https://tiktok.com/@monksbodycare"
                src="/assets/images/networkIcons/tiktok.svg"
                alt="Tiktok Icon"
                target="_blank"
              />
              <IconButton
                as="LINK"
                href="https://twitter.com/monksbodycare/"
                src="/assets/images/networkIcons/twitter.svg"
                alt="Twitter Icon"
                target="_blank"
              />
              <IconButton
                as="LINK"
                href="https://www.facebook.com/monksdeodorant/"
                src="/assets/images/networkIcons/facebook.svg"
                alt="Facebook Icon"
                target="_blank"
              />
            </div>
          </div>
          <div>
            <div className={styles.plainText}>Get 10% off your first order</div>
            <form onSubmit={handleSubmit}>
              <Input
                setState={setEmail}
                state={email}
                type="email"
                name="email"
                placeholder="Enter your email address"
                submit={true}
                className={styles.textBtn}
              />
            </form>
          </div>
        </div>
      </footer>
      {cookiesAlert && (
        <div className={styles.cookiesAlert}>
          This website uses cookies. They improve your navigation and the
          quality of our site. By navigating, you accept the placement and use
          of cookies as described in our
          <TextButton
            href="/legal"
            label="Privacy policy."
            className={styles.cookiesLink}
          />
          <IconButton
            as="BUTTON"
            onClick={() => setCookiesAlert(false)}
            src="/assets/images/Icons/close.png"
            width={14}
            height={14}
            className={styles.closeCookiesAlert}
          />
        </div>
      )}
    </>
  )
}
