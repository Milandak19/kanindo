import React from 'react';
import Layout from '../../layouts';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import immigrations from '../../data/immigrations';
import parse from 'html-react-parser';
console.log(immigrations);
// console.log(this.props.match);
class ImmigrantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const filterData = immigrations.filter(
      (item) => this.props.match.params.data == item.title
    );
    console.log('cari', filterData);
    this.setState({ data: filterData[0] }, () => {
      console.log('wewe', this.props.match);
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.data != null &&
      prevProps.match.params.data != this.props.match.params.data
    ) {
      const filterData = immigrations.filter(
        (item) => this.props.match.params.data == item.title
      );
      this.setState({ data: filterData[0] }, () => {
        console.log('wawa', this.state.data);
      });
    }
  }
  render() {
    const { data } = this.state;
    return (
      <Layout
        page={
          data != null
            ? data.name || data.title
            : this.props.match.params.data
        }
      >
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">
                    {data != null ? data.title : 'Work Details'}
                  </h2>
                  <nav aria-label="breadcrumb">
                    {data != null ? data.subTitle : 'Immigrants'}
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

        {/*====== CASE DETAILS PART START ======*/}
        <div className="case-details-area pt-120 pb-115">
          <Container>
            <Row>
              {data != null &&
                data.content.map((item, index) => (
                  <div className="case-content-2 pt-40 pb-25">
                    <h4 className="title">{item.title}</h4>
                    {parse(item.description)}
                  </div>
                ))}
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default ImmigrantsPage;
