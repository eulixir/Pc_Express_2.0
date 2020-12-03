import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ChangePassword from './pages/Entry/ChangePassword';
import Login from './pages/Entry/Login';
import ForgotPassword from './pages/Entry/ForgotPassword';
import HaveCode from './pages/Entry/HaveCode';
import Register from './pages/Entry/Register';
import aboutUs from './pages/aboutUs';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/Entry/Login" exact component={Login} />
      <Route path="/Entry/ChangePassword" exact component={ChangePassword} />
      <Route path="/Entry/ForgotPassword" exact component={ForgotPassword} />
      <Route path="/Entry/HaveCode" exact component={HaveCode} />
      <Route path="/Entry/Register" exact component={Register} />

      <Route path="/aboutUs" exact component={aboutUs} />
    </BrowserRouter>
  );
}

export default Routes;
