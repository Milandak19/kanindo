import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import news from '../../data/news'
import './Index.scss';

function deleteTagP(s) {
  if (s.includes('<p>')) {
    const text = s.substring(3, s.length - 4)
    return text;
  } else {
    return s;
  }
}
class LatestNewsPart extends React.Component {
  

    render() {
        return ( 
          <div className="latest-news-area gray-bg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <div className="section-title text-center">
                    <span>latest news</span>
                    <h2 className="title">Article & Recent Regulation</h2>
                  </div>
                  {/* sction title */}
                </Col>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="letast-news-grid white-bg  ml-40 mr-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="latest-news">
                      <Row>
                        {
                          news.map((item, index) => (
                            <div
                              className="col-lg-4 col-md-6 wow slideInUp"
                              data-wow-duration=".5s"
                              data-wow-delay="0s"
                            >
                              <div className="letest-news-item mt-30">
                                <span>{item.timeline}</span>
                              <h4 className="title">
                              <Link to={"blog-details"}>
                                {item.title}
                              </Link>
                              </h4>
                              <img style={{ borderRadius: '8px'}} src={`assets/images/${item.img}`} />
                              <p className='dataTitle'>
                                {item.thumbnail}
                              </p>
                              <Link to={"blog-details"} className="main-btn">
                                  Read More
                                <FontAwesomeIcon icon={faLongArrowAltRight} className={`pl-1`} />
                              </Link>
                                </div>
                            </div>
                          ))
                        }
                      </Row>
                    </div>
                    {/* latest news */}
                  </Col>
                </Row>
                {/* row */}
              </Container>
              {/* container */}
            </div>
          </div>
         );
    }
}
 
export default LatestNewsPart;