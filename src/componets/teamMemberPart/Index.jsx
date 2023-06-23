import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Index.scss';

class TeamMemberPart extends React.Component {
  render() {
    return (
      <div className="team-member-area">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <div className="section-title text-center">
                <h2 className="title">
                  What They are Saying About Us
                </h2>
              </div>
            </Col>
          </Row>
          {/* row */}
        </Container>
        {/* container */}
        <div className="container-fluid">
          <Row className="testimoniPhoto">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-team-member mt-30">
                <img
                  src="/assets/images/Banner-1.png"
                  alt="team-member"
                />
              </div>
              {/* single team member */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-team-member mt-30">
                <img
                  src="assets/images/Banner-2.png"
                  alt="team-member"
                />
              </div>
              {/* single team member */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-team-member mt-30">
                <img
                  src="assets/images/Banner-3.png"
                  alt="team-member"
                />
              </div>
              {/* single team member */}
            </div>
          </Row>
          {/* row */}
        </div>
        {/* container fluid */}
      </div>
    );
  }
}

export default TeamMemberPart;
