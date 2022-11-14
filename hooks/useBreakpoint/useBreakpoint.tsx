import { useState, useCallback, useEffect } from 'react'

export enum Breakpoint {
  SMALL = 'SMALL',
  TABLET = 'TABLET',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

// update styles/media-queries.scss
export const breakpointsMinWidths = {
  small: 768,
  tablet: 990,
  medium: 1024,
  large: 1440
}

interface IUseBreakpoint {
  currentBreakpoint: keyof typeof Breakpoint
  isSmallBreakpoint: boolean
  isMediumOrLargeBreakpoint: boolean
  isLargeBreakpoint: boolean
  isSmallOrTabletBreakpoint: boolean
}

export const useBreakpoint = (): IUseBreakpoint => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(Breakpoint.LARGE)

  const isSmallBreakpoint = currentBreakpoint === Breakpoint.SMALL

  const isSmallOrTabletBreakpoint =
    currentBreakpoint === Breakpoint.SMALL ||
    currentBreakpoint === Breakpoint.TABLET

  const isMediumOrLargeBreakpoint =
    currentBreakpoint === Breakpoint.MEDIUM ||
    currentBreakpoint === Breakpoint.LARGE

  const isLargeBreakpoint = currentBreakpoint === Breakpoint.LARGE

  const updateBreakpoint = useCallback(() => {
    const { large, small, tablet } = breakpointsMinWidths

    const getWidth = window.innerWidth

    if (getWidth < small) {
      setCurrentBreakpoint(Breakpoint.SMALL)
    } else if (getWidth > small && getWidth < tablet) {
      setCurrentBreakpoint(Breakpoint.TABLET)
    } else if (getWidth > tablet && getWidth < large) {
      setCurrentBreakpoint(Breakpoint.MEDIUM)
    } else {
      setCurrentBreakpoint(Breakpoint.LARGE)
    }
  }, [setCurrentBreakpoint])

  useEffect(() => {
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)

    return (): void => window.removeEventListener('resize', updateBreakpoint)
  }, [updateBreakpoint])

  return {
    currentBreakpoint,
    isSmallBreakpoint,
    isLargeBreakpoint,
    isMediumOrLargeBreakpoint,
    isSmallOrTabletBreakpoint
  }
}
