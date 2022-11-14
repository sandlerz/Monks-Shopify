import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import styles from './styles.module.scss'
import cx from 'classnames'
import { useUI } from 'context/UIProvider'
import { IconButton } from 'components/buttons'
import { useCart } from 'shopify/cart'
import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import { ShopMenu } from './ShopMenu'

export const Navbar = () => {
  const [showNav, setShowNav] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [navTop, setNavTop] = useState(true)
  const [logoLoading, setLogoLoading] = useState(false)
  const { isLeftDrawerOpen, openLeftDrawer, openRightDrawer } = useUI()
  const { data } = useCart()
  const { isSmallOrTabletBreakpoint, isSmallBreakpoint } = useBreakpoint()

  const handleSearch = () => {
    setShowSearch(!showSearch)
  }

  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 20) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      setNavTop(lastScroll < 30)
      lastScroll = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={cx(styles.root, {
        [styles.show]: showNav,
        [styles.background]: navTop ? showSearch : true
      })}>
      <Link href={'/'}>
        <a
          className={cx(styles.logo, {
            [styles.onLoadImage]: logoLoading
          })}>
          <Image
            src={'/assets/images/brand/logo-black.svg'}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            onLoad={() => setLogoLoading(true)}
          />
        </a>
      </Link>
      {!isSmallOrTabletBreakpoint && (
        <nav className={styles.nav}>
          <ShopMenu />
          <Link href={'/about'}>
            <a className={styles.link}>About</a>
          </Link>
          <Link href={'/ingredients'}>
            <a className={styles.link}>Ingredients</a>
          </Link>
          <Link href={'/what-are-aha-s'}>
            <a className={styles.link}>What are AHAs?</a>
          </Link>
        </nav>
      )}
      <nav
        className={cx(styles.userNav, {
          [styles.onLoadImage]: logoLoading
        })}>
        <IconButton
          src="/assets/images/Icons/search.svg"
          as="BUTTON"
          height={isSmallBreakpoint ? 23 : 26}
          width={isSmallBreakpoint ? 23 : 26}
          onClick={handleSearch}
        />
        <div className={styles.itemCounterContainer}>
          <IconButton
            as="BUTTON"
            src="/assets/images/Icons/bag.svg"
            height={isSmallBreakpoint ? 23 : 30}
            width={isSmallBreakpoint ? 23 : 30}
            onClick={openRightDrawer}
          />
          {data && data?.totalQuantity > 0 && (
            <span>{data?.totalQuantity}</span>
          )}
        </div>
        <div>
          {isSmallOrTabletBreakpoint && (
            <Hamburger
              size={17}
              distance={'md'}
              color={'#181818'}
              toggled={isLeftDrawerOpen}
              onToggle={openLeftDrawer}
            />
          )}
        </div>
      </nav>
      {showSearch && (
        <div className={styles.searchContainer}>
          <span>
            <Image
              src={'/assets/images/Icons/search.svg'}
              alt="Search icon"
              layout="fixed"
              width={25}
              height={25}
              objectFit="cover"
            />
          </span>
          <input type="text" placeholder="Search..." className={styles.input} />
          <span className={styles.closeIcon}>
            <Image
              src={'/assets/images/Icons/close.png'}
              alt="Search icon"
              layout="fixed"
              width={21}
              height={21}
              objectFit="contain"
              onClick={() => setShowSearch(false)}
            />
          </span>
        </div>
      )}
    </div>
  )
}
