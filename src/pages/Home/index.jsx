import React from 'react';
//import { toast } from 'react-toastify';
import Header from '../../layouts/partials/header/Header';
import Footer from '../../layouts/partials/footer/index';

import Banner from '../../componets/banner/Index';
import WhoWeAreArea from '../../componets/whoWeAreArea/Index';
import WhyChoosePart from '../../componets/whyChoosePart/Index';
import TeamMemberPart from '../../componets/teamMemberPart/Index';
import LatestNewsPart from '../../componets/latestNewsPart/Index';
import { Helmet } from 'react-helmet';

class Index1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home - Kanindo Consulting</title>
        </Helmet>
        <Header />
        <Banner />
        <WhoWeAreArea />
        <WhyChoosePart />
        <TeamMemberPart />
        <LatestNewsPart />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
