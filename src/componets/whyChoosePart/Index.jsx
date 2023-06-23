import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faServer,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

class WhyChoosePart extends React.Component {
  render() {
    return (
      <div className="why-choose-area">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="section-title text-center">
                <span>why choose us</span>
                <h2 className="title">Why Choose Kanindo Visas ?</h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration=".5s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">
                  {' '}
                  The Fastest Visa Procurement Process
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faServer}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">
                  The process of getting a visa is the simplest and
                  hassle-free
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faTools}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">Personalized Service</h4>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration=".5s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">
                  More than 20 years of experience in the field of
                  visa processing and highly skilled in immigration
                  matters
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faServer}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">
                  A comfortable and easy-to-reach office, in the
                  center of Jakarta
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow slideInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
            >
              <div className="single-choose text-center mt-30">
                <div className="icon-box">
                  <span />
                  <FontAwesomeIcon
                    icon={faTools}
                    size={`4x`}
                    style={{ color: 'white' }}
                  />
                </div>
                <h4 className="title">
                  The work team is friendly, professional and happy to
                  do their job
                </h4>
              </div>
            </div>
          </Row>
        </Container>
        <div className="choose-dot">
          <img src="assets/images/choose-dot.png" alt="" />
        </div>
        <div className="choose-shape">
          <img src="assets/images/choose-shape.png" alt="" />
        </div>
      </div>
    );
  }
}

export default WhyChoosePart;
