import React from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Index.scss";

class AboutIntroPart extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (event) => {
    this.setState({ isOpen: true });
    event.preventDefault();
  };

  render() {
    return (
      <div className="about-intro-area pt-120">
        <Container>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="TdSA7gkVYU0"
            onClose={() => this.setState({ isOpen: false })}
          />
          <Row>
            <Col lg="12">
              <div className="intri-content">
                <h2 className="title">Services</h2>
                <p className="text-1">
                  Kanindo Consulting began in 2012 with a simple goal in mind:
                  to improve expatriate services in Indonesia. Visa consultants,
                  legal practitioners, and relocation agencies in Indonesia were
                  untrustworthy, charged exorbitant fees, and were not
                  transparent about their pricing strategies and working
                  practises, which we wanted to overcome and improve.
                </p>
                <p className="text-1">
                  We wanted to combine Western efficiency with Eastern
                  hospitality to give our customers the best of both worlds. As
                  a multinational team, we thrived on incorporating our personal
                  experiences and knowledge into what we do, and we worked
                  tirelessly together to create an agency unlike any other in
                  Indonesia.
                </p>
                <p className="text-1">
                  We are proud to be the first agency in Indonesia to truly
                  provide ethical and transparent information. Please click on
                  the link below that is most relevant to your current
                  interests.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <div style={{ marginTop: '2rem' }}>
                <div className="intri-content">
                  <h2 className="title">Vision & Mission</h2>
                  <p className="text-1">Vision</p>
                  <p className="textDescriptionData">
                    “To be the Best Consultant as the Services Provider of
                    company establishments, immigrations and visa handlings in
                    Indonesia”
                  </p>
                  <p className="text-1">Mission</p>
                  • To improve the skill and quality of employees <br />
                  • To provide excellent service to clients <br />
                  • To improve and maintain valued assets of the company <br />
                  <p className="text-1">Object</p>
                  <p className="textDescriptionData">
                    To provide quality service according to service standard and
                    maximum satisfaction of the customers.
                  </p>
                  <p className="text-1">Motto</p>
                  <p className="textDescriptionData">
                    Tranquility and client satisfaction is our happiness
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutIntroPart;
