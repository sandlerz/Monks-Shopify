import { Button } from 'components/buttons'
import { Page } from 'components/common/Page'
import { Container } from 'components/iu'
import Image from 'next/image'

import styles from './styles.module.scss'

const ingredients = () => {
  return (
    <Page
      title="What are AHA's | Monks"
      description="All-natural bodycare products made with care."
      path="what-are-aha-s">
      <Container
        marginTop={140}
        marginBottom={70}
        className={styles.grid}
        smallPadding={30}>
        <Image
          src="/assets/images/ingredients/what-are-ahas.png"
          alt="AHAs image"
          layout="responsive"
          width={700}
          height={700}
          objectFit="contain"
          objectPosition="top"
        />
        <div className={styles.bodyContainer}>
          <div>
            <p>
              AHAs (alpha hydroxy acids) are exfoliants derived from fruits that
              naturally balance your skin’s pH. Chances are you’ve come across
              this multipurpose ingredient in your skincare routine. At Monks,
              we use AHAs in our deodorant sprays for their ability to
              effectively target odor-causing bacteria, making them an excellent
              replacement for aluminum salts which work by plugging your pores
              to make you sweat less. Plus, AHAs can help reduce
              hyperpigmentation.
            </p>
          </div>
          <div>
            <h3>What are AHAs?</h3>
            <p>
              Alpha hydroxy acids (AHAs) are a group of fruit-derived acids that
              naturally balance your skin’s pH. A multi-purpose ingredient with
              a variety of applications and benefits, AHAs are the stary
              ingredient of our deodorant sprays for their ability to target
              odor-causing bacteria.
            </p>
          </div>
          <div>
            <h3>
              I’ve seen AHAs in my face wash before, but how do they work in
              deodorant?
            </h3>
            <p>
              Body odor is caused by bacteria that live in our armpits feeding
              on our sweat. These bacteria need an alkaline pH in order to
              thrive. By lowering the skin’s pH to a more acidic level, AHAs
              effectively stop body odor at the source.
            </p>
          </div>
          <div>
            <h3>What are the benefits of AHAs?</h3>
            <p>
              ide from being master pH regulators and odor-fighters, AHAs help
              to smooth underarms and reduce hyperpigmentation. They have also
              been shown to protect against and treat ingrown hairs.
            </p>
          </div>
          <div>
            <h3>Why not use baking soda instead of AHAs?</h3>
            <p>
              While baking soda does help to absorb odor, it’s extremely
              alkaline which essentially encourages odor-causing bacteria. This
              may help explain why baking soda-based natural deodorants only
              seem to work for short periods of time.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <Button
          label="EXPLORE OUR PRODUCTS"
          theme={'SECONDARY'}
          size={'LARGE'}
          as="LINK"
          href="shop"
        />
      </Container>
    </Page>
  )
}

export default ingredients
