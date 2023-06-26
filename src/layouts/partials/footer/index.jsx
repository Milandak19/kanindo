import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="footer-area footer-area-2 footer-area-1 bg_cover"
          style={{
            backgroundImage: 'url(assets/images/footer-bg.jpg)',
          }}
        >
          <div className="footer-overlay">
            <Container className="position-relative">
              <Row>
                <Col lg="4" md="7">
                  <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Phone</h4>
                    <a
                      href="https://wa.me/6281292051725"
                      style={{ color: 'white' }}
                    >
                      +62 812‑9205‑1725
                    </a>
                    <h4
                      className="title"
                      style={{ marginTop: '1rem' }}
                    >
                      Email
                    </h4>
                    <a
                      style={{
                        marginTop: 0,
                        paddingTop: 0,
                        color: 'white',
                      }}
                      href="mailto:info@kanindoconsulting.com"
                      target="__blank"
                    >
                      <p style={{ marginTop: 0, paddingTop: 0 }}>
                        info@kanindoconsulting.com
                      </p>
                    </a>
                  </div>{' '}
                  {/* widget item 3 */}
                </Col>
                <Col lg="4" md="6">
                  <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Working Hours</h4>
                    <ul>
                      <li>Monday - Friday: 10:00 - 17:00</li>
                      <li>Tuesday: 10:00 - 17:00</li>
                      <li>Wednesday: 10:00 - 17:00</li>
                      <li>Thursday: 10:00 - 17:00</li>
                      <li>Friday: 10:00 - 17:00</li>
                      <li>Saturday: Closed</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>{' '}
                  {/* widget item 3 */}
                </Col>
                <Col lg="4" md="6">
                  <div style={{ borderRadius: 'border-radius: 8px' }}>
                    <iframe
                      title="Our Office"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8509866321606!2d106.7718890760972!3d-6.283311293705562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ca56177559%3A0xf0128941d59c8c5a!2sPlaza%203%20Pondok%20Indah!5e0!3m2!1sen!2sid!4v1687770319560!5m2!1sen!2sid"
                      width="400"
                      height="250"
                      className="border-0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Col>
              </Row>{' '}
              {/* row */}
              <Row>
                <Col lg="12">
                  <div className="footer-copyright">
                    <p>
                      Copyright By@ <span>Ducor</span> -{' '}
                      {new Date().getFullYear()}
                    </p>
                  </div>{' '}
                  {/* footer copyright */}
                </Col>
              </Row>{' '}
              {/* row */}
            </Container>{' '}
            {/* container */}
          </div>
        </footer>
        {/*====== BACK TO TOP ======*/}
        <div className="back-to-top back-to-top-2">
          <a href="#backTotop">
            <i className="fas fa-arrow-up" />
          </a>
        </div>
        {/*====== BACK TO TOP ======*/}
      </React.Fragment>
    );
  }
}

export default Footer;
