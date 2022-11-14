import { Container } from 'components/iu'
import { SectionLegal } from 'components/SectionInfoLegal'
import {
  termOfUse,
  privacyPolicy
} from '../../components/SectionInfoLegal/dataLegal'
import { useBreakpoint } from 'hooks'
import { Page } from 'components/common/Page'
import cx from 'classnames'

import styles from './styles.module.scss'

const Legal = () => {
  const { isSmallBreakpoint } = useBreakpoint()

  return (
    <Page
      title="Legal | Monks"
      description="All-natural bodycare products from a premium brand."
      path="legal">
      <Container
        marginTop={isSmallBreakpoint ? 190 : 255}
        marginBottom={0}
        maxWidth={1240}
        smallPadding={30}
        mediumPadding={50}>
        <section className={styles.textContainer}>
          <h3>Accessibility Statement</h3>
          <p>Monks is committed to digital accessibility.</p>

          <p>
            We have partnered with eSSENTIAL Accessibility, a leading provider
            of website accessibility solutions. Their accessibility program
            evaluates and audits our digital products on an ongoing basis in
            accordance with best practices and is supported by a diverse team of
            accessibility professionals, including users of assistive
            technologies. The platform includes making an assistive CX
            technology application available to customers who have trouble
            typing, gesturing, moving a mouse, or reading. The application is
            free to download and it incorporates tools such as mouse and
            keyboard replacements, voice recognition, speech enablement,
            hands-free/touch-free navigation, and more.
          </p>
          <p>
            We want to hear from you if you encounter any accessibility issues
            on our digital properties. Please contact our Customer Support at
            team@monks.us
          </p>
        </section>

        <section className={styles.margin_50}>
          <SectionLegal title="Terms of Use" data={termOfUse} />
        </section>

        <section className={styles.margin_50}>
          <SectionLegal title="Privacy Policy" data={privacyPolicy} />
        </section>

        <section className={cx(styles.textContainer, styles.contactContainer)}>
          <span className={styles.contact}>Contact Us:</span>
          <span>Monks, LLC</span>
          <span>team@monks.us</span>
          <span>{`© ${new Date().getFullYear()}`}</span>
        </section>
      </Container>
    </Page>
  )
}

export default Legal
