import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ChangePassword from './pages/Entry/ChangePassword';
import Login from './pages/Entry/Login';
import ForgotPassword from './pages/Entry/ForgotPassword';
import HaveCode from './pages/Entry/HaveCode';
import Register from './pages/Entry/Register';
import AboutUs from './pages/aboutUs';
import AboutDevs from './pages/aboutDevs';
import Contact from './pages/Contact';

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Landing} />
      <Route path="/Entry/Login" exact component={Login} />
      <Route path="/Entry/ChangePassword" exact component={ChangePassword} />
      <Route path="/Entry/ForgotPassword" exact component={ForgotPassword} />
      <Route path="/Entry/HaveCode" exact component={HaveCode} />
      <Route path="/Entry/Register" exact component={Register} />

      <Route path="/aboutUs" exact component={AboutUs} />
      <Route path="/aboutDevs" exact component={AboutDevs} />
      <Route path="/contact" exact component={Contact} />
    </BrowserRouter>
  );
}

export default Routes;
