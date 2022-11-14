import { Page } from 'components/common/Page'
import { Container } from 'components/iu'
import { Grid, LayoutGrid } from 'components/iu/Grid'
import { ProductShopCard } from 'components/product'
import { useBreakpoint } from 'hooks'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { getConfig } from 'shopify/api/config'
import getAllProducts from 'shopify/products/get-all-products'

import styles from './styles.module.scss'

const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isSmallBreakpoint } = useBreakpoint()
  const {
    query: { category }
  } = useRouter()

  return (
    <Page title="Monks | A Natural Fragrance Body Care Brand" path="shop">
      <Container marginTop={isSmallBreakpoint ? 100 : 190} maxWidth={1340}>
        <Grid className={styles.gap} layout={LayoutGrid.LayoutB}>
          {products
            .filter(
              ({ productType }) => !category || `${productType}s` === category
            )
            .map((product) => (
              <ProductShopCard key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </Page>
  )
}

export default Shop

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    }
  }
}
