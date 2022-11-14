import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardReview } from '../CardReviews'
import { reviews } from '../CardReviews/data'
import SwiperCore from 'swiper'
import cx from 'classnames'
import Image from 'next/image'

import styles from './styles.module.scss'

export const ReviewsCarrusel = () => {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext()
      setIsEnd(swiper.isEnd)
      setIsBeginning(swiper.isBeginning)
    }
  }

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev()
      setIsEnd(swiper.isEnd)
      setIsBeginning(swiper.isBeginning)
    }
  }

  const breakpoints = {
    300: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    550: {
      spaceBetween: 25,
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }

  return (
    <>
      <Swiper
        className={styles.swiper}
        breakpoints={breakpoints}
        onBeforeInit={(swiper) => {
          setSwiper(swiper)
        }}>
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <CardReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.arrowsContainer}>
        <Image
          src="/assets/images/Icons/arrow.svg"
          layout="intrinsic"
          alt="arrow icon"
          width={31}
          height={22}
          onClick={handlePrev}
          className={cx(styles.leftArrow, {
            [styles.disableArrow]: isBeginning
          })}
        />
        <Image
          src="/assets/images/Icons/arrow.svg"
          layout="intrinsic"
          alt="arrow icon"
          width={31}
          height={22}
          className={cx(styles.rightArrow, {
            [styles.disableArrow]: isEnd
          })}
          onClick={handleNext}
        />
      </div>
    </>
  )
}
