import React from 'react';
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
                  <h2 className="title">Our Refund Policy</h2>
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
                          If your Visa application has been submitted
                          to the Visa section and has received a
                          receipt & made a payment to the Bank, then
                          we cannot provide a refund.
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
                          If you cancel your visa application before
                          we submit it to the Visa Department or
                          Immigration Office for processing, we can
                          provide a refund but there is a 10%
                          administration fee.
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
                          We will only transfer the refund to the
                          account number that has transferred to us.
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
                          Your refund will be processed within 14 days
                          from request via email to our company email:
                          info@kanindoconsulting.com.
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
