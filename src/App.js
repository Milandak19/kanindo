import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index1 from './pages/Home/index';
import AboutPage from './pages/About';
import ImmigrantsPage from './pages/Immigrants/details';
import VisaPage from './pages/Visa-Service/details';
import CompanyPage from './pages/Company/details';
import TermsConditions from './pages/Terms&Conditions/Index';
import NoMatch from './pages/errors/no-match';
import Preloader from './componets/preloader';
import PaymentMethod from './pages/Terms&Conditions/PaymentMethod';
import RefundPolicy from './pages/Terms&Conditions/RefundPolicy';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Preloader />
        <Switch>
          <Route exact path="/" component={Index1} />

          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/error" component={NoMatch} />
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
          <Route
            exact
            path="/payment-method"
            component={PaymentMethod}
          />
          <Route
            exact
            path="/our-refund-policy"
            component={RefundPolicy}
          />

          <Route path="/*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
