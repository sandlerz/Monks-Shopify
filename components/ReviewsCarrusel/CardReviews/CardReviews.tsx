import Image from 'next/image'
import { Review } from './data'
import styles from './styles.module.scss'

interface Props {
  review: Review
}

export const CardReview = ({ review }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.quotationMark}>
        <Image
          src="/assets/images/Icons/review-quotation-mark.png"
          alt="quotation-mark icon"
          layout="responsive"
          width={40}
          height={40}
          quality={100}
        />
      </div>
      <span className={styles.title}>{review.title}</span>
      <span className={styles.review}>{review.review}</span>
      <Image
        src="/assets/images/util/stars-reviews.png"
        alt="stars icons"
        layout="intrinsic"
        width={80}
        height={16}
      />
      <span className={styles.name}>{review.name}</span>
    </div>
  )
}
