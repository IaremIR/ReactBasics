import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { BrandsContainer } from "./BrandsContainer";
import { MenClothContainer } from "./MenClothContainer";
import { WomenClothContainer } from "./WomenClothContainer";
import { LoginFormContainer } from "./LoginFormContainer";
import { Navigation } from './NavbarContainer';
import { HomeContainer } from './HomeContainer';
import { SignupContainer } from './SignupContainer';
import ApplicationProvider from '../Context/ApplicationContext';

const Routes = () => (
  <ApplicationProvider>
    <Router>
      <Fragment>
        <Navigation />
        <Route
          exact
          path="/"
          component={HomeContainer}
        />
        <Route path="/brands" render={() =>
          <BrandsContainer color='red' />} />
        <Route path="/men" component={MenClothContainer} />
        <Route path="/women" component={WomenClothContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupContainer} />
      </Fragment>
    </Router>
  </ApplicationProvider>
);

export default Routes
