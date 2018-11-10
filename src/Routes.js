import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import { BrandsContainer } from "./BrandsContainer";
import { MenClothContainer} from "./MenClothContainer";
import { WomenClothContainer } from "./WomenClothContainer";
import { LoginFormContainer } from "./LoginFormContainer";
import { Navigation } from './Navbar';
import HomeContainer from './HomeContainer';

const Routes = () => (
  <Router>
    <div>
      <Navigation/>
      <Route
        exact
        path="/"
        component = {HomeContainer}
      />
      <Route path="/brands" component={BrandsContainer} />
      <Route path="/men" component={MenClothContainer} />
      <Route path="/women" component={WomenClothContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  </Router>
);
  
  export default Routes
