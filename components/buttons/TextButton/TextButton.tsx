import styles from './styles.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  label?: string
  underline?: boolean
  href: string
  icon?: string
  iconSize?: number
  alt?: string
  target?: '_selft' | '_blank' | '_parent' | '_top'
  className?: string
  handleOnClickGTM?: () => void
}

export const TextButton = ({
  label,
  underline,
  href,
  icon,
  alt,
  target,
  iconSize = 25,
  className,
  handleOnClickGTM
}: Props) => {
  return (
    <Link href={href} className={styles.pointer} passHref>
      <a
        target={target}
        className={cx(
          { [styles.underline]: underline },
          styles.font,
          styles.btnContainer,
          className
        )}
        onClick={handleOnClickGTM}>
        {icon && (
          <span
            style={{ minWidth: `${iconSize}px`, maxHeight: `${iconSize}px` }}>
            <Image
              src={icon}
              alt={alt!}
              layout="responsive"
              width={100}
              height={100}
            />
          </span>
        )}
        {label || null}
      </a>
    </Link>
  )
}
