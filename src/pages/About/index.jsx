import React from 'react';
import { Link } from 'react-router-dom';

import AboutExperiencePart from '../../componets/aboutExperiencePart/Index';
import AboutIntroPart from '../../componets/aboutIntroPart/Index';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../layouts';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout page="About Us">
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">About Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to={'index'}>Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
                {/* page title */}
              </Col>
            </Row>
            {/* row */}
          </Container>
          {/* container */}
        </div>
        {/*====== PAGE TITLE PART ENDS ======*/}
        <AboutExperiencePart />
        <AboutIntroPart />
      </Layout>
    );
  }
}

export default AboutPage;
