import { NextSeo } from 'next-seo'
import React from 'react'

interface Props {
  title: string
  description?: string
  path?: string
  children: React.ReactNode | React.ReactNode[]
}

export const Page = ({
  title,
  description = 'Empower the art of personal care with naturally fragranced, genderless, plant-based natural deodorant that is kind to your body and respectful of the planet.Monks offers elevated yet accessible natural personal care products for the environmentally and socially aware fragrance lover with discerning tastes and standards.',
  path = '',
  children
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `https://www.monks.world/${path}`,
          site_name: 'Monks',
          images: [
            {
              url: 'https://www.monks.world/assets/images/brand/img-monks.png',
              width: 1200,
              height: 627,
              alt: 'Monks Logo',
              type: 'image/png'
            }
          ]
        }}
      />
      {children}
    </>
  )
}
