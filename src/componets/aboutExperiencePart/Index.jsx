import React from 'react';
import './Index.scss';
import { Container, Row, Col } from 'react-bootstrap';

class Index extends React.Component {
  render() {
    return (
      <div className="about-experience-area pb-120">
        <Container>
          <Col>
            <Row>
              <Col lg="5">
                <div className="experience-item">
                  <h2 className="title">Our Story</h2>
                </div>
                {/* experience item */}
              </Col>
              <Col lg="6" className="offset-lg-1">
                <div className="experience-item">
                  <p>
                    Kanindo Consulting is a service company providing
                    visa handling and immigration issues for
                    expatriates who aim to visit Indonesia in the
                    framework of tourism, social culture, business or
                    employment. Kanindo Consulting is based within the
                    capital city of Jakarta and has been serving the
                    expatriate community in Indonesia for many years.
                    We are supported by a very experienced group of
                    experts in their fields, and thrive ourselves on
                    being the leading immigration and visa services
                    provider. We are ready to provide assistance for
                    our clients needing consultation in the issues of
                    visa and immigration, and improving expatriate
                    services.
                  </p>
                </div>
                {/* experience item */}
              </Col>
            </Row>
            <Row>
              <Col lg="5">
                <span></span>
                <div className="experience-item">
                  \<h2 className="title">Why Choose Kanindo ?</h2>
                </div>
                {/* experience item */}
              </Col>
              <Col lg="6" className="offset-lg-1">
                <div className="experience-item">
                  <p>
                    Kanindo Consulting is a service company providing
                    visa handling and immigration issues for
                    expatriates who aim to visit Indonesia in the
                    framework of tourism, social culture, business or
                    employment. Kanindo Consulting is based within the
                    capital city of Jakarta and has been serving the
                    expatriate community in Indonesia for many years.
                    We are supported by a very experienced group of
                    experts in their fields, and thrive ourselves on
                    being the leading immigration and visa services
                    provider. We are ready to provide assistance for
                    our clients needing consultation in the issues of
                    visa and immigration, and improving expatriate
                    services.
                  </p>
                </div>
                {/* experience item */}
              </Col>
            </Row>
            <Row>
              <Col bg="12">
                <img
                  alt="banner bg 1.3"
                  src="assets/images/banner-bg-1.3.jpg"
                />
              </Col>
            </Row>
          </Col>
          {/* row */}
        </Container>
        {/* container */}
      </div>
    );
  }
}

export default Index;
