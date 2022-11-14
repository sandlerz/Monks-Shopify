import { Button, ButtonSize, ButtonTheme } from 'components/buttons'
import { Container } from 'components/iu'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'
import { useBreakpoint } from 'hooks'
import { useUI } from 'context/UIProvider'

interface Props {
  imageDesktop: string
  imageMobile: string
  description: string
  title: string
  cta: string
}

export const Hero = ({
  imageDesktop,
  imageMobile,
  title,
  description,
  cta
}: Props): JSX.Element => {
  const { openModal } = useUI()
  const [loadImage, setLoadImage] = useState(false)
  const [displayCupon, setDisplayCupon] = useState(true)
  const { isSmallBreakpoint } = useBreakpoint()

  const handleCloseCupon = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    setDisplayCupon(false)
  }

  return (
    <div className={styles.container}>
      {!isSmallBreakpoint && (
        <Image
          src={imageDesktop}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="top right"
          className={cx(styles.image, {
            [styles.imageload]: loadImage
          })}
          quality={100}
          onLoad={() => setLoadImage(true)}
        />
      )}
      <Container marginBottom={0} smallPadding={0} mediumPadding={0}>
        <div className={styles.bodyContainer}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <Button
            as="LINK"
            label={cta}
            href="/shop"
            className={styles.btn}
            theme={ButtonTheme.QUATERNARY}
            size={ButtonSize.FULLWIDTH}
          />

          {isSmallBreakpoint && (
            <Image
              src={imageMobile}
              alt="hero image"
              layout="responsive"
              width={375}
              height={276}
              className={cx(styles.image, {
                [styles.imageload]: loadImage
              })}
              quality={100}
              onLoad={() => setLoadImage(true)}
            />
          )}
        </div>
      </Container>
      {displayCupon && (
        <div className={styles.getOff} onClick={openModal}>
          <Image
            src="/assets/images/Icons/cupon.png"
            width={18}
            height={18}
            alt="cupon icon"
          />
          <span className={styles.textOff}>Get 10% OFF!</span>
          <span className={styles.closeIconOff} onClick={handleCloseCupon}>
            x
          </span>
        </div>
      )}
    </div>
  )
}
