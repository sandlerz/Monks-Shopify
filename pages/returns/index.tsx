import { Page } from 'components/common/Page'
import { Container } from 'components/iu'
import { useBreakpoint } from 'hooks'
import styles from './styles.module.scss'

const Returns = (): JSX.Element => {
  const { isSmallBreakpoint } = useBreakpoint()

  return (
    <Page
      title="Shipping & Returns | Monks"
      description="All-natural bodycare products made with care."
      path="returns">
      <Container
        marginTop={isSmallBreakpoint ? 190 : 255}
        className={styles.bodyContainer}
        smallPadding={30}
        mediumPadding={50}
        maxWidth={1240}>
        <div>
          <h3>Shipping</h3>
          <p>
            Monks is pleased to offer complimentary shipping for all orders over
            $30.00.
            <br />
            <br />
            Here are some frequently asked questions regarding shipping and our
            returns policy. If you don’t find the answer to your question, we
            welcome you to contact us at team@monks.us
          </p>
        </div>

        <div>
          <h3>When will my order ship?</h3>
          <p>Most orders ship within 1-3 business days.</p>
        </div>

        <div>
          <h3>Which carrier will be used to ship my order?</h3>
          <p>All orders ship via FedEx.</p>
        </div>

        <div>
          <h3>How long will it take for my order to arrive?</h3>
          <p>2-3 days</p>
        </div>

        <div>
          <h3>Do you ship to P.O. boxes?</h3>
          <p>
            We are unable to ship to P.O. boxes. We ask that you please kindly
            provide an alternate address at checkout, such as an office address.
          </p>
        </div>

        <div>
          <h3>Do you offer expedited shipping?</h3>
          <p>At this time, we do not offer expedited shipping options.</p>
        </div>

        <div>
          <h3>How can I track my order?</h3>
          <p>
            Once your order has shipped, you will receive a shipping
            confirmation via email. If you are unable to locate this email or
            you have yet to receive your tracking details within 24 hours of
            placing your order, please email us at team@monks.us.
          </p>
        </div>

        <div>
          <h3>What happens if my package gets lost?</h3>
          <p>
            Please email us at team@monks.us. If your package is lost in
            transit, we will do everything we possibly can to assist you.
            However, we are not responsible for packages accompanied by proof of
            delivery.
          </p>
        </div>

        <div>
          <h3>Do you charge sales tax?</h3>
          <p>
            As an e-commerce company based in the U..S, we are required to
            charge sales tax on orders shipping to certain states. This list may
            vary over time. Any applicable taxes are automatically calculated at
            checkout.
          </p>
        </div>

        <div>
          <h3>Returns & Exchanges</h3>
          <p>Monks provides free returns and exchanges on all orders.</p>
        </div>

        <div>
          <h3>What should I do with the product(s) I want to return?</h3>
          <p>
            If you are unsatisfied with your purchase, you do not need to return
            the product back to us. We suggest that you give any unwanted
            product(s) to someone in need. If this is not possible, we kindly
            ask that you recycle them by pouring out the liquid first. All our
            packaging is made with environmentally friendly components and may
            also be recycled.
          </p>
        </div>

        <div>
          <h3>How long will it take to process my return?</h3>
          <p>Returns may take 2-3 weeks to process.</p>
        </div>
      </Container>
    </Page>
  )
}

export default Returns
