import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiSmartphone, FiShoppingCart } from "react-icons/fi";
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {

  render() { 
      return ( 
        <React.Fragment>
        <footer className="footer-area footer-area-2 footer-area-1 bg_cover" style={{backgroundImage: 'url(assets/images/footer-bg.jpg)'}}>
          <div className="footer-overlay">
            <Container className="position-relative">
              <Row>
                <Col lg="4" md="7">
                <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Phone</h4>
                    <a href="tel:0 21 3504 417" style={{ color: 'white'}}>
                      +62 21 3504 417 | +62 821 1724 4261
                    </a>
                    <h4 className="title" style={{ marginTop: '1rem'}}>Email</h4>
                    <a style={{ marginTop: 0, paddingTop: 0, color: 'white' }} href="info@kanindoconsulting.com" target="__blank">
                        <p style={{ marginTop: 0, paddingTop: 0 }}>info@kanindoconsulting.com</p>
                    </a>
                  </div> {/* widget item 3 */}
                </Col>
                <Col lg="4" md="6">
                  <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Working Hours</h4>
                    <ul>
                      <li>Monday - Friday: 08:00 - 17:00</li>
                      <li>Tuesday: 08:00 - 12:00</li>
                      <li>Wednesday: 08:00 - 12:00</li>
                      <li>Thursday: 08:00 - 12:00</li>
                      <li>Friday: 08:00 - 12:00</li>
                      <li>Saturday: Closed</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div> {/* widget item 3 */}
                </Col>
                <Col lg="4" md="6">
                  <div style={{ borderRadius: 'border-radius: 8px'}}>
                    <iframe 
                      loading="lazy" 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3335.5899170231896!2d106.81774117439245!3d-6.169938675071351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d62697031f%3A0x259cad06ec4e2729!2sJl.%20Suryopranoto%20No.11f%2C%20RT.14%2FRW.8%2C%20Petojo%20Utara%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010130%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1637301861579!5m2!1sen!2sus" 
                      width={400}
                      height={250}
                      className="border-0"
                    >
                    </iframe>
                  </div>
                </Col>
              </Row> {/* row */}
              <Row>
                <Col lg="12">
                  <div className="footer-copyright">
                    <p>Copyright By@ <span>Ducor</span> - {(new Date().getFullYear())}</p>
                  </div> {/* footer copyright */}
                </Col>
              </Row> {/* row */}
            </Container> {/* container */}
          </div>
        </footer>
        {/*====== BACK TO TOP ======*/}
        <div className="back-to-top back-to-top-2">
          <a  href="#backTotop">
            <i className="fas fa-arrow-up" />
          </a>
        </div>
        {/*====== BACK TO TOP ======*/}

      </React.Fragment>
    );
  }
}
 
export default Footer;