import { useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'

import styles from './styles.module.scss'
import { blockData } from './data'
import { TextButton } from 'components/buttons'
import { Container } from 'components/iu'
import { useBreakpoint } from 'hooks'

export enum BlockLayout {
  layoutA = 'layoutA',
  layoutB = 'layoutB'
}

interface Props {
  layout: keyof typeof BlockLayout
  data: blockData
}

export const Block = ({ layout, data }: Props): JSX.Element => {
  const [loadImage, setLoadImage] = useState(false)
  const { isSmallBreakpoint } = useBreakpoint()
  const { title, subTitle, description, imageDesktop, imageMobile, ctaLabel } =
    data

  return (
    <div className={cx(styles.container, styles[layout])}>
      <Image
        className={cx(styles.image, {
          [styles.imageLoad]: loadImage
        })}
        src={isSmallBreakpoint ? imageMobile.src : imageDesktop.src}
        alt={
          (isSmallBreakpoint ? imageMobile.alt : imageDesktop.alt) ||
          'block image'
        }
        layout="fill"
        objectFit="cover"
        objectPosition={
          isSmallBreakpoint
            ? imageMobile.imagePosition
            : imageDesktop.imagePosition
        }
        onLoad={() => setLoadImage(true)}
        quality={100}
      />

      <Container marginBottom={0} smallPadding={0} mediumPadding={0}>
        <div className={styles.bodyContainer}>
          <h3 className={styles.title}>{title}</h3>
          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
          <p className={styles.description}>{description}</p>
          {ctaLabel && (
            <TextButton
              href="" // TODO Link To ?
              label={ctaLabel}
              underline
              className={styles.ctaLabel}
            />
          )}
        </div>
      </Container>
    </div>
  )
}
