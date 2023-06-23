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

class TermsConditions extends React.Component {
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
                  <h2 className="title">Terms & Conditions</h2>
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
                          The Visa application process will start
                          after all the required Documents and
                          Payments are received.
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
                          Our price offer is only valid for 1 week and
                          prices can change at any time if there is a
                          change in Immigration rules.
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
                          Any problems that arise due to misuse of
                          Visas or violating the rules are not our
                          responsibility.
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
                          After your E-Visa has been issued/given by
                          the Indonesian Immigration Authority, you
                          must use the Visa or enter Indonesia within
                          90 days, if it is more than 90 days, your
                          Visa will no longer be valid.
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
                          If there is a delay in granting a Visa that
                          has been applied due to extraordinary events
                          such as riots or a political crisis, The
                          Visa applicant must wait until Immigration
                          can issue the Visa.
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
                          If there is an identical/similar to the name
                          of the Visa Applicant with the name of
                          another person, The Applicant must be
                          patient waiting for the results of the data
                          verification process by immigration and
                          after the data verification process is
                          complete, the Visa process will continue.
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

export default TermsConditions;
