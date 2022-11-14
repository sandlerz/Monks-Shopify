import Image from 'next/image'
import { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { dataStripType } from './data'
import cx from 'classnames'
import { Pagination, Navigation } from 'swiper'
import styles from './styles.module.scss'
import { useBreakpoint } from 'hooks'

interface Props {
  data: dataStripType
}

export const Strip = ({ data }: Props): JSX.Element => {
  const [imageLoad, setimageLoad] = useState(false)
  const { currentBreakpoint, isSmallBreakpoint, isSmallOrTabletBreakpoint } =
    useBreakpoint()

  let slidesPerView = 7

  if (currentBreakpoint === 'TABLET') {
    slidesPerView = 5
  } else if (currentBreakpoint === 'SMALL') {
    slidesPerView = 2
  }

  return (
    <Swiper
      id="strip_swiper"
      className={styles.swiper}
      slidesPerView={slidesPerView}
      spaceBetween={isSmallBreakpoint ? 5 : 36.7}
      loop={isSmallBreakpoint || isSmallOrTabletBreakpoint}
      navigation={isSmallBreakpoint || isSmallOrTabletBreakpoint}
      modules={[Pagination, Navigation]}>
      {data.map(
        ({ title, description, image: { height, src, width } }, index) => (
          <SwiperSlide
            key={title}
            className={cx(styles.slide, styles.imageOpacity, {
              [styles.imageOpacityLoad]: imageLoad
            })}
            style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
            <div className={styles.image}>
              <Image
                src={src}
                alt={title}
                layout="fixed"
                width={width}
                height={height}
                onLoad={() => setimageLoad(true)}
              />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}
