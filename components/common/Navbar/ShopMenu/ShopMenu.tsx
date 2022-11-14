import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useData } from 'context/DataProvider'

export const ShopMenu = (): JSX.Element => {
  const { collections } = useData()

  return (
    <div className={styles.dropdown}>
      <span className={styles.shopMenu}>
        Shop <KeyboardArrowDownIcon className={styles.materialArrowRotate} />
      </span>

      <ul className={styles.dropdownMenu}>
        <li
          className={styles.dropdown_item}
          style={{
            animationDelay: '0ms'
          }}>
          <Link href={'/shop'}>
            <a className={styles.link}>Shop All</a>
          </Link>
        </li>
        {collections?.map(({ title, comingSoon }, index) => (
          <li
            key={`${title}_shopMenu`}
            className={styles.dropdown_item}
            style={{
              animationDelay: `${(index + 1) * 60}ms`
            }}>
            <Link href={`/shop?category=${title}`}>
              <a className={styles.link}>
                {title}
                {comingSoon && (
                  <span className={styles.comingSoon}>{comingSoon.value}</span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
