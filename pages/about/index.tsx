import { Button } from 'components/buttons'
import { Page } from 'components/common/Page'
import { Container } from 'components/iu'

import styles from './styles.module.scss'

const About = () => {
  return (
    <Page
      title="About | Monks"
      description="All-natural bodycare products made with care."
      path="about">
      <Container
        marginTop={140}
        marginBottom={0}
        mediumPadding={80}
        maxWidth={1560}>
        <div className={styles.articleContainer}>
          <h3>Our story</h3>
          <p>
            At Monks, we believe that living well should smell good. Our brand
            was born from a desire for quality, non-toxic body care products
            that outperform their conventional counterparts while offering an
            olfactory experience that rivals that of a fine fragrance. Each
            product release begins with a signature scent that is brought to
            life through our natural fragrance expertise. From there we look to
            nature to inspire our innovation, using sustainable, plant-based
            ingredients to craft gentle yet effective products that respect both
            body and planet. Body care may be personal, but it is also for
            everyone. Our fragrance blends and formulas are for she, he, and
            them —just like Mother Nature intended.
          </p>
        </div>
      </Container>
      <Container
        marginBottom={70}
        marginTop={20}
        mediumPadding={80}
        maxWidth={1560}>
        <div className={styles.articleContainer}>
          <h3>Who we are?</h3>
          <span>Good sense, great scents</span>
          <p>
            We believe that when it comes to your health and wellbeing, trusting
            nature is always a good idea, but that doesn’t mean sacrificing on
            product efficacy or pleasure.
          </p>
          <span>All for one, and one for all</span>
          <p>
            We believe that everyone deserves to look and feel their best. That
            is why we have formulated our products to be genderless and gentle
            enough for even the most sensitive skin types.
          </p>
          <span>Less is more</span>
          <p>
            Inside and out, we believe that simplicity is the ultimate form of
            sophistication. Just like our aesthetic is inspiring yet minimal, we
            craft our products to give our consumers everything they need and
            nothing they don’t.
          </p>
          <span>Healthy body, happy planet</span>
          <p>
            We believe that our physical health is inextricably linked to the
            wellbeing of our planet. All our products are made and packaged in a
            way that respects this essential bond.
          </p>
          <span>Feel good, do good</span>
          <p>
            We believe that the best part of feeling your best is how it
            empowers you to make a positive impact and give back. That’s why
            we’re proud to be apart of the 1% for the Planet® impact fund.
          </p>
        </div>
      </Container>
      <Container>
        <Button
          label="EXPLORE OUR PRODUCTS"
          theme="SECONDARY"
          size="LARGE"
          as="LINK"
          href="shop"
        />
      </Container>
    </Page>
  )
}

export default About
