import { useBreakpoint } from 'hooks'
import React from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  marginBottom?: number
  marginTop?: number
  maxWidth?: number
  className?: string
  smallPadding?: number
  mediumPadding?: number
}

export const Container = ({
  children,
  marginBottom = 140,
  marginTop = 0,
  maxWidth = 1440,
  className,
  smallPadding = 10,
  mediumPadding = 20
}: Props): JSX.Element => {
  const { isSmallBreakpoint } = useBreakpoint()

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        maxWidth: `${maxWidth}px`,
        marginInline: 'auto',
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
        padding: `0 ${
          isSmallBreakpoint ? `${smallPadding}px` : `${mediumPadding}px`
        }`
      }}>
      {children}
    </div>
  )
}
