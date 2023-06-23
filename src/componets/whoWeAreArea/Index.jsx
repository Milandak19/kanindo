import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPassport,
  faBuilding,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import './Index.scss';

class WhoWeAreArea extends React.Component {
  render() {
    return (
      <div className="who-we-are-area pt-110 pb-120">
        <Container>
          <Row>
            <div
              className="col-lg-5 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="section-title">
                <h2 className="title">
                  High Quality Immigration Services
                </h2>
              </div>
              {/* section title */}
            </div>
            <div
              className="col-lg-6 offset-lg-1 wow fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
            >
              <div className="section-title">
                <p>
                  Our team of visa and immigration consultants are
                  highly experienced and highly skilled in the field
                  of Indonesian visas and immigration, having handled
                  visa processing for more than two decades.
                </p>
                <p>
                  Therefore, we can help our clients with fast,
                  efficient service, and provide advice and
                  information that is complete, accurate and always
                  up-to-date.
                </p>
                <p>
                  To maintain the professionalism of our work, our
                  team continuously receives training, additional
                  knowledge and skills improvement to provide the best
                  service to our valuable clients.
                </p>
              </div>
              {/* section title */}
            </div>
          </Row>
          <Row className="middleClass">
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
              data-wow-duration=".5s"
              data-wow-delay="0s"
            >
              <div className="what-we-do-item text-center mt-30">
                <FontAwesomeIcon icon={faPassport} />
                <h5 className="title">Visa Services</h5>
                <p>
                  We provide services for managing all kinds of
                  Indonesian immigration documents, both for
                  foreigners and Indonesian citizens with a fast and
                  very simple process, such as: passport management,
                  various types of Visas, stay permits, KITAS, KITAP,
                  EPO, Exit Permit, SKIM, work permits for Foreign
                  Workers (TKA).
                </p>
              </div>
              {/* what we do item */}
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="what-we-do-item text-center mt-30">
                <FontAwesomeIcon icon={faBuilding} />
                <h5 className="title">Company Establishment</h5>
                <p>
                  We are experts in the field of business
                  establishment management and business licensing in
                  Indonesia. We have helped thousands of people
                  establish their businesses throughout Indonesia. The
                  process of establishing a company through us can be
                  completed very quickly and in a simpler process.
                </p>
              </div>
              {/* what we do item */}
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0s"
            >
              <div className="what-we-do-item text-center mt-30">
                <FontAwesomeIcon icon={faHouseUser} />
                <h5 className="title">Immigration Services</h5>
                <p>
                  We provide services for managing all kinds of
                  Indonesian immigration documents, both for
                  foreigners and Indonesian citizens with a fast and
                  very simple process, such as: passport management,
                  various types of Visas, stay permits, KITAS, KITAP,
                  EPO, Exit Permit, SKIM, work permits for Foreign
                  Workers (TKA).
                </p>
              </div>
              {/* what we do item */}
            </div>
          </Row>
          {/* row */}
        </Container>
        {/* container */}
        <div className="what-we-are-shape-1">
          <img
            src="/assets/images/what-we-are-shape-1.png"
            alt="shape"
          />
        </div>
        <div className="what-we-are-shape-2">
          <img
            src="/assets/images/what-we-are-shape-2.png"
            alt="shape"
          />
        </div>
      </div>
    );
  }
}

export default WhoWeAreArea;
