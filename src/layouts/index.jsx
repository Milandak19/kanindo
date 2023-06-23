import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './partials/header/Header';
import Footer from './partials/footer/index';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.page} - Kanindo Consulting</title>
        </Helmet>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
