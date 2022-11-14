export interface blockData {
  title: string
  subTitle?: string
  description: string
  ctaLabel?: string
  imageDesktop: {
    src: string
    width: number
    height: number
    alt?: string
    imagePosition: string
  }
  imageMobile: {
    src: string
    width: number
    height: number
    alt?: string
    imagePosition: string
  }
}

interface dataBlocksType {
  shopOutAHA: blockData
  dayMoneyBackGuarantee: blockData
}

export const dataBlock: dataBlocksType = {
  shopOutAHA: {
    title: 'Shop our AHA-infused natural deodorants',
    description:
      'Monks offers elevated yet accessible natural deodorants for the environmentally and socially aware fragrance lover with discerning tastes and standards.',
    ctaLabel: 'Learn more',
    imageDesktop: {
      src: '/assets/images/blockImages/Block-img-1.png',
      width: 1440,
      height: 312,
      imagePosition: 'top'
    },
    imageMobile: {
      src: '/assets/images/blockImages/Block-img-1-mobile.png',
      width: 375,
      height: 656,
      imagePosition: 'center'
    }
  },
  dayMoneyBackGuarantee: {
    title: '30 Day Money Back Guarantee',
    subTitle: 'Didn’t love it? Send it back',
    description:
      'All we ask is you give Monks 2 weeks. Deprogram your body from the old deodorants you know and the natural ones you’ve tried. Change takes time. If you’ve given it a go and still don’t love it, we’ll take it back. No questions asked. Return your Monks product in 30 days and you’ll be refunded your full amount.',
    imageDesktop: {
      src: '/assets/images/blockImages/Block-img-2.png',
      width: 1440,
      height: 416,
      imagePosition: 'top'
    },
    imageMobile: {
      src: '/assets/images/blockImages/Block-img-2-mobile.png',
      width: 375,
      height: 568,
      imagePosition: 'top'
    }
  }
}
