import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Index.scss'

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="next slick-arrow" style={style}>
       <FontAwesomeIcon icon={faAngleRight}/>
    </span>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="prev slick-arrow" style={style}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </span>
  );
}


class Banner extends React.Component {


    render() { 

      var settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        fade: true,
        arrows: true,
        initialSlide: 0,
        dots: false,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    arrows: false
                }
            }
        ],
      //  className: 'slick-slider-fade',
      };
  
      
        return ( 
            <React.Fragment>
            <Slider className="banner-active"  {...settings}>
              <div className="single-banner bg_cover bg_img_1 ">
                <img src="" alt=""/>
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Kanindo Consulting Indonesia
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            Indonesia Visa & Immigration Specialists
                          </p>
                          <div className='ContainerButton'>
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.6s"
                              className="main-btn marginRightButton"
                              to={"services"}
                            >
                              About Us <i className="fal fa-long-arrow-right" />
                            </Link>
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.6s"
                              className="main-btn marginLeftButton"
                              to={"services"}
                            >
                              Contact Us <i className="fal fa-long-arrow-right" />
                            </Link>
                          </div>
                        
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

              <div className="single-banner bg_cover  bg_img_2">
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Visa Services
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            With over 20 years of experience in the field of visa 
                            processing and helping thousands of tourists and expatriates
                            with their visa needs, you can be confident that you will receive an 
                            efficient service, at an extremely competitive price.
                          </p>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>


              <div className="single-banner bg_cover  bg_img_3" >
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Company Establishment
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                          We are experts in the field of business establishment 
                          management and business licensing in Indonesia. We have helped 
                          thousands of people establish their businesses throughout Indonesia. 
                          The process of establishing a company through us can be completed 
                          very quickly and in a simpler process.
                          </p>
                        
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

              <div className="single-banner bg_cover  bg_img_3" >
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Immigration Services
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            We provide services for managing all kinds of Indonesian
                             immigration documents, both for foreigners and Indonesian 
                             citizens with a fast and very simple process, such as: passport 
                             management, various types of Visas, stay permits, KITAS, KITAP, EPO, 
                             Exit Permit, SKIM, work permits for Foreign Workers (TKA).
                          </p>
                        
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

              <div className="single-banner bg_cover  bg_img_3" >
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          >
                            Immigration Services
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            We provide services for managing all kinds of Indonesian
                             immigration documents, both for foreigners and Indonesian 
                             citizens with a fast and very simple process, such as: passport 
                             management, various types of Visas, stay permits, KITAS, KITAP, EPO, 
                             Exit Permit, SKIM, work permits for Foreign Workers (TKA).
                          </p>
                        
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

            </Slider>
            </React.Fragment>
         );
    }
}
 
export default Banner;