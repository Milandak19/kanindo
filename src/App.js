import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index1 from './pages/Home/index';
import Index2 from './pages/Home/index2';
import Index3 from './pages/Home/index3';
import Index4 from './pages/Home/index4';
import AboutPage from './pages/About';
import ContactPage from './pages/contact';
import ServicesPage from './pages/service';
import ServicesDetails from './pages/service/details';
import CaseStudy from './pages/case-study';
import CaseDetails from './pages/case-study/details';
import ComingSoon from './pages/coming-soon';
import FaqPage from './pages/faq';
import PricingPage from './pages/pricing';
import ShopPage from './pages/shop';
import ShopDetailsPage from './pages/shop/details';
import ProductPage from './pages/product';
import ProductDetailPage from './pages/product-details';
import ImmigrantsPage from './pages/Immigrants/details';
import VisaPage from './pages/Visa-Service/details';
import CompanyPage from './pages/Company/details';

import TeamPage from './pages/team';
import TeamDetailsPage from './pages/team/details';
import TermsConditions from './pages/Terms&Conditions/Index';
import BlogStandard from './pages/blog/blog-standard';
import BlogGrid from './pages/blog/blog-grid';
import BlogDetails from './pages/blog/blog-details';
import BlogDetails2 from './pages/blog/blog-details2';

import NoMatch from './pages/errors/no-match';
import Preloader from './componets/preloader';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Preloader />
        <Switch>
          <Route exact path="/" component={Index1} />

          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route
            exact
            path="/services-details"
            component={ServicesDetails}
          />

          <Route exact path="/case-study" component={CaseStudy} />
          <Route exact path="/case-details" component={CaseDetails} />
          <Route exact path="/coming-soon" component={ComingSoon} />
          <Route exact path="/error" component={NoMatch} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route
            exact
            path="/immigrants/:data"
            component={ImmigrantsPage}
          />
          <Route
            exact
            path="/visa-service/:data"
            component={VisaPage}
          />
          <Route
            exact
            path="/company/:data"
            component={CompanyPage}
          />
          <Route
            exact
            path="/terms-conditions"
            component={TermsConditions}
          />
          <Route exact path="/products" component={ProductPage} />
          <Route
            exact
            path="/products-details"
            component={ProductDetailPage}
          />
          <Route exact path="/shop" component={ShopPage} />

          <Route
            exact
            path="/shop-details"
            component={ShopDetailsPage}
          />
          <Route exact path="/team" component={TeamPage} />
          <Route
            exact
            path="/team-details"
            component={TeamDetailsPage}
          />
          <Route
            exact
            path="/blog-standard"
            component={BlogStandard}
          />
          <Route exact path="/blog-grid" component={BlogGrid} />
          <Route exact path="/blog-details" component={BlogDetails} />
          <Route
            exact
            path="/blog-details2"
            component={BlogDetails2}
          />

          <Route exact path="/contact" component={ContactPage} />

          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
