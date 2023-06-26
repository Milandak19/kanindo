import React from 'react';
import PartialNav from './PartialNav';
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';
import Logo from '../../../assets/images/logo-2.png';
import { Row, Col, Navbar } from 'react-bootstrap';
import { FiMail, FiSmartphone } from 'react-icons/fi';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header-area header-area-2 header-area-4">
          <div className="header-top pl-30 pr-30 white-bg">
            <Row className="align-items-center">
              <Col md="6" sm="7">
                <div className="header-left-side text-center text-sm-left mb-50">
                  <ul>
                    <li>
                      <a
                        href="mailto:info@kanindoconsulting.com"
                        target="__blank"
                      >
                        <FiMail />
                        info@kanindoconsulting.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/6281292051725"
                        target="__blank"
                      >
                        <FiSmartphone />
                        +62 812‑9205‑1725
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="6" sm="5">
                <div className="header-right-social text-center text-sm-right mb-50">
                  <SocialLink />
                </div>
              </Col>
            </Row>
          </div>
          <div className="header-nav">
            <div className="navigation">
              <Navbar expand="lg" className={`transparent-color`}>
                <Navbar.Brand as={Link} to={'/'}>
                  <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle style={{ marginRight: '0px' }}>
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </Navbar.Toggle>{' '}
                {/* navbar toggler */}
                <Navbar.Collapse id="navbarSupportedContent">
                  <PartialNav />
                </Navbar.Collapse>{' '}
                {/* navbar collapse */}
              </Navbar>
            </div>{' '}
            {/* navigation */}
          </div>
        </header>
      </>
    );
  }
}

export default Header;
