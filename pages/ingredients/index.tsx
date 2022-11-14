import { Button } from 'components/buttons'
import { Page } from 'components/common/Page'
import { Container } from 'components/iu'
import { useBreakpoint } from 'hooks'

import styles from './styles.module.scss'

const Ingredients = () => {
  const { isSmallBreakpoint } = useBreakpoint()

  return (
    <Page
      title="Ingredients | Monks"
      description="All-natural bodycare products made with care."
      path="ingredients">
      <Container
        marginTop={isSmallBreakpoint ? 195 : 245}
        marginBottom={70}
        maxWidth={1220}
        mediumPadding={40}
        smallPadding={40}>
        <div className={styles.bodyContainer}>
          <div>
            <h3>Naturally fragranced, naturally effective.</h3>
            <p>
              At Monks, we craft natural fragrance experiences to empower your
              body care routine with mindfully crafted formulas made locally in
              Los Angeles, California. All of our ingredients are rated 1 on the
              Environmental Working Group’s Skin Deep® scale to ensure all our
              products are amongst the safest you can buy. <br />
              <br />
              Natural but powerful, fragranced yet functional. That’s our vision
              and our promise.
            </p>
          </div>
          <div>
            <h3>Alcohol Denatured with Citrus Aurantium (Bergamot) Oil</h3>
            <p>
              In personal care, denatured alcohols are used for their
              anti-bacterial and drying qualities. To balance out the
              potentially dehydrating aspect of this ingredient, we pair it with
              glycerin and water.
            </p>
            <span>
              How we use it: To kill odor-causing bacteria while reducing the
              “dry-time” of our deodorant
            </span>
          </div>
          <div>
            <h3>Aloe Barbadensis (Aloe Vera) Leaf Juice</h3>
            <p>
              The extract and juice from aloe leaves have been used for
              centuries to help soothe, moisturize, and protect the skin. The
              combination of gentle astringent and powerful antioxidant
              properties may help improve skin tone, calm redness, and protect
              against free radical damage.
            </p>
            <span>How we use it: As a moisturizer</span>
          </div>
          <div>
            <h3>Citrus Junos (Yuzu) Peel Oil</h3>
            <p>
              This uniquely scented and prized citrus fruit grows wild
              throughout Asia where it is revered for its uplifting aroma.
              Distilled from the fresh peel, the oil&apos;s bright, sparkling,
              sweet, and faintly floral scent helps soothe stress and tension.
            </p>
            <span>
              How we use it: As a natural fragrance; part of our essential oil
              blend
            </span>
          </div>
          <div>
            <h3>Copaifera Officianalis (Copaiba Balsam) Oil</h3>
            <p>
              Sourced from France, this oil has a rich, earthy, and grounding
              aroma. When distilled properly, it contains at least 90%
              sesquiterpenes, which have noteworthy antibacterial and
              anti-inflammatory properties.
            </p>
            <span>
              How we use it: As a natural fragrance; part of our essential oil
              blend
            </span>
          </div>
          <div>
            <h3>Cordyceps (Mushroom) Militaris Mycelium Extract</h3>
            <p>
              Discovered over 2000 years ago in the high mountains of China,
              this exotic medicinal mushroom was once exclusively reserved for
              the emperor&apos;s family. High in antioxidants, it may improve
              the appearance of premature aging and sun-stressed skin.
            </p>
            <span>
              How we use it: A potent source of antioxidants, to help hydrate
              dry skin while being a skin lightener that will prevent the under
              arm skin to get darker
            </span>
          </div>
          <div>
            <h3>Cupressus Sempervirens (Cypress) Leaf Oil</h3>
            <p>
              Highly valued by ancient civilizations, tall and slender cypress
              trees epitomize upward motion and centered energy, assisting with
              clarity and focus. The leaf oil is exceptionally vibrant with a
              fresh balsamic aroma.
            </p>
            <span>
              How we use it: As a natural fragrance; part of our essential oil
              blend
            </span>
          </div>
          <div>
            <h3>Glycerin</h3>
            <p>
              Botanically derived glycerin has humectant properties that help
              promote balanced skin and moisture retention. Particularly
              beneficial for dry, stressed, or mature skin, glycerin also gives
              our body wash its luxurious consistency.
            </p>
            <span>How we use it: As a moisturizer</span>
          </div>
          <div>
            <h3>Lactic Acid</h3>
            <p>
              A hydrating alpha acid (AHA), lactic acid supports gentle
              exfoliation and cell rejuvenation, revealing smoother and
              firmer-looking skin. Its lower pH may help make skin inhospitable
              to odor-causing bacteria.
            </p>
            <span>How we use it: As a pH adjuster</span>
          </div>
          <div>
            <h3>Mandelic Acid</h3>
            <p>
              Botanically derived mandelic acid is an alpha hydroxy acid that
              promotes gentle exfoliation, helping to clarify and protect the
              skin. Both water and lipid-soluble, it may penetrate and work
              within the hair follicle to address odor-causing bacteria.
            </p>
            <span>How we use it: As a pH adjuster</span>
          </div>
          <div>
            <h3>Polylysine</h3>
            <p>
              This polypeptide of the essential amino acid L-lysine promotes an
              unfriendly environment for microorganisms. Because of its amino
              acid content, polylisine may help even skin texture and minimize
              the appearance of aging.
            </p>
            <span>How we use it: Part of our natural preservative complex</span>
          </div>
          <div>
            <h3>Purified Water</h3>
            <span>
              How we use it: As a solvent in which it dissolves many of the
              ingredients that impart skin benefits
            </span>
          </div>
          <div>
            <h3>Saccharomyces Ferment</h3>
            <p>
              A water-like substance made from fermenting and filtering yeast.
              It is naturally high in minerals, amino acids, beta glucan, and
              vitamins. As a probiotic, the fermentation process breaks down
              molecules, resulting in a very bio-available ingredient that can
              easily penetrate the skin to soothe, hydrate, brighten, and
              repair. It can also support the breakdown of sweat, helping to
              reduce wetness and create an unfavorable environment for bacteria.
            </p>
            <span>
              How we use it: As an odor-neutralising active ingredient in our
              deodorant
            </span>
          </div>
          <div>
            <h3>Santalum Astrocalendonicum (Sandalwood) Oil</h3>
            <p>
              Sustainably grown and harvested sandalwood essential oil from New
              Caledonia is a luxuriously rich and ultra-smooth alternative to
              endangered Indian sandalwood oil. It has a warm and sweet,
              uplifting woody aroma with protective benefits for the skin.
            </p>
            <span>
              How we use it: As a natural fragrance; part of our essential oil
              blend
            </span>
          </div>
          <div>
            <h3>Vetiveria Zizanioides (Vetiver) Root Oil</h3>
            <p>
              Sourced from Madagascar, this oil is prized for its deeply woody
              and calming scent as well as its natural antioxidant and
              antibacterial properties. It is also used in Ayurveda and
              Traditional Chinese Medicine.
            </p>
            <span>
              How we use it: As a natural fragrance; part of our essential oil
              blend
            </span>
          </div>
          <div>
            <h3>Maranta Arundinacea (Arrowroot) Root Extract</h3>
            <p>
              Extracted from the tropical plant known as Maranta arundinacea,
              arrowroot is a starchy substance that resembles a white powder. It
              is commonly used as thickener in everything from cosmetics to food
              (you can cook with it). Regarded for its antimicrobial potential,
              it absorbs excess moisture, softens the skin, and has also been
              known to draw out toxins and impurities.
            </p>
            <span>
              How we use it: As a thickener and skin-conditioner in our stick
              formula
            </span>
          </div>
          <div>
            <h3>Tribehenin</h3>
            <p>
              Tribehenin is an emollient prepared by combining glycerin and a
              fatty acid. In cosmetics, it is used as an occlusive agent to
              prevent moisture loss. Monks’ tribehenin is composed of glycerin
              and behenic acid, a naturally occurring long-chain fatty acid.
            </p>
            <span>
              How we use it: As a thickener and skin-conditioner in our stick
              formula
            </span>
          </div>
          <div>
            <h3>Zinc Ricinoleate</h3>
            <p>
              Zinc Ricinoleate is a zinc salt that neutralizes odor by trapping
              the odor molecules that are released during the bacterial
              decomposition that occurs during perspiration. It is not an
              antiperspirant. Zinc ricinoleate also has unique fungicidal and
              bacterial properties that do not interfere with the skin&apos;s
              natural flora.
            </p>
            <span>How we use it: As an odor neutralizer</span>
          </div>
          <div>
            <h3>Saccharomyces Ferment</h3>
            <p>
              A water-like substance made from fermenting and filtering yeast.
              It is naturally high in minerals, amino acids, beta glucan, and
              vitamins. As a probiotic, the fermentation process breaks down
              molecules, resulting in a very bio-available ingredient that can
              easily penetrate the skin to soothe, hydrate, brighten, and
              repair. It can also support the breakdown of sweat, helping to
              reduce wetness and create an unfavorable environment for bacteria.
            </p>
            <span>
              As an odor-neutralising active ingredient in our deodorant
            </span>
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

export default Ingredients
