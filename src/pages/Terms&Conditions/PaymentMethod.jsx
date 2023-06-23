import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
} from 'react-bootstrap';
import Layout from '../../layouts';

class PaymentMethod extends React.Component {
  render() {
    return (
      <Layout page="Terms & Conditions">
        <div
          className="about-faq-area pb-100 bg_cover"
          style={{ backgroundImage: 'url(assets/images/faq-bg.jpg)' }}
        >
          <Container>
            <Row>
              <Col lg="6">
                <div className="about-faq-content">
                  <h2 className="title">Payment Method</h2>
                </div>

                <div className="faq-accordion-3 mt-30">
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept International Bank Wire Transfer
                          Payment.
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept Direct Cash Payment at our Office.
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept PayPal Payment using our fixed
                          rate and an additional 5% fee.
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>We accept Western Union Payment.</span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept Credit Card Payment using our
                          fixed rate and an additional 3% fee.
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept Virtual Account Payment.
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="0">
                    <Card
                      className="card wow fadeInLeft pt-2 pb-2 pl-4 pr-4"
                      data-wow-duration=".1.2s"
                      data-wow-delay=".2s"
                    >
                      <Card.Header
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMagic}
                          className="mr-2"
                        />
                        <span>
                          We accept Domestic Retail Payment
                          (Alfagroup)
                        </span>
                      </Card.Header>
                    </Card>
                  </Accordion>
                </div>
                {/* faq accordion */}
              </Col>
            </Row>
            {/* row */}
          </Container>
          {/* container */}
        </div>
      </Layout>
    );
  }
}

export default PaymentMethod;
