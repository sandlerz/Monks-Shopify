import { Block, BlockLayout, dataBlock } from 'components/Block'
import { Page } from 'components/common/Page'
import { Hero } from 'components/Hero'
import { Container, Grid, LayoutGrid } from 'components/iu'
import { ProductHomeCard } from 'components/product/ProductHomeCard'
import { ReviewsCarrusel } from 'components/ReviewsCarrusel'
import { dataStrip, Strip } from 'components/Strip'
import { useBreakpoint } from 'hooks'
import type { InferGetStaticPropsType } from 'next'
import { getConfig } from 'shopify/api/config'
import { getAllProducts } from 'shopify/products'

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isSmallBreakpoint } = useBreakpoint()

  return (
    <Page title="Monks | Naturally Fragranced Body Care For All">
      <Hero
        title="Your underarms <br /> will thank you "
        description="Try Monks, naturally fragranced underarm care without plastics, baking soda, or any other funky stuff."
        imageDesktop="/assets/images/blockImages/hero.png"
        imageMobile="/assets/images/blockImages/hero-mobile.png"
        cta="Shop now"
      />

      <Container
        marginBottom={40}
        marginTop={48}
        mediumPadding={40}
        smallPadding={15}>
        <Strip data={dataStrip} />
      </Container>

      <Grid
        layout={LayoutGrid.LayoutA}
        title="Our Products"
        ctaLabel="SHOP ALL"
        cta="/shop">
        {products.map((product) => (
          <ProductHomeCard key={product.id} product={product} />
        ))}
      </Grid>

      <Block layout={BlockLayout.layoutA} data={dataBlock.shopOutAHA} />

      <Container
        marginTop={isSmallBreakpoint ? 32 : 76}
        marginBottom={isSmallBreakpoint ? 45 : 66}
        mediumPadding={110}
        smallPadding={32}>
        <ReviewsCarrusel />
      </Container>

      <Block
        layout={BlockLayout.layoutB}
        data={dataBlock.dayMoneyBackGuarantee}
      />

      <div>Instagram!</div>
    </Page>
  )
}

export default Home

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    }
  }
}
