import { IconButton } from 'components/buttons'
import { useUI } from 'context/UIProvider'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import styles from './styles.module.scss'
import { useData } from 'context/DataProvider'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

export const DrawerMenu = () => {
  const { closeLeftDrawer } = useUI()
  const { collections } = useData()

  return (
    <div className={styles.mobileMenu}>
      <span className={styles.closeBtn} onClick={closeLeftDrawer}>
        <IconButton
          src="/assets/images/Icons/close.png"
          as="BUTTON"
          onClick={() => {}}
          height={13}
          width={13}
        />
      </span>
      <ul className={styles.mainNavLinks}>
        <li className={styles.shopLink}>
          <ul>
            <Accordion disableGutters={true} defaultExpanded>
              <AccordionSummary className={styles.shopTitle}>
                <span className={styles.shopArrowCenter}>
                  Shop <KeyboardArrowDownIcon className="materialIconRotate"/>
                </span>
              </AccordionSummary>
              <AccordionDetails className={styles.shopNavContainer}>
                <li>
                  <Link href="/shop" passHref>
                    <a
                      className={styles.linkSecondary}
                      onClick={closeLeftDrawer}>
                      Shop All
                    </a>
                  </Link>
                </li>
                {collections.map(({ title, comingSoon }) => (
                  <li key={`${title}_mobile`}>
                    <Link href={`/shop?category=${title}`} passHref>
                      <a
                        className={styles.linkSecondary}
                        onClick={closeLeftDrawer}>
                        {title}
                        {comingSoon && <span className={styles.comingSoon}>{comingSoon.value}</span>}
                      </a>
                    </Link>
                  </li>
                ))}
              </AccordionDetails>
            </Accordion>
          </ul>
        </li>

        <li>
          <Link href="/about" passHref>
            <a className={styles.link} onClick={closeLeftDrawer}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ingredients" passHref>
            <a className={styles.link} onClick={closeLeftDrawer}>
              Ingredients
            </a>
          </Link>
        </li>
        <li>
          <Link href="/what-are-aha-s" passHref>
            <a className={styles.link} onClick={closeLeftDrawer}>
              What are AHAs?
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
