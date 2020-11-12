import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ChangePassword from './pages/Login/ChangePassword';
import Login from './pages/Login/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/Entry/Login" exact component={Login} />
      <Route path="/Entry/ChangePassword" exact component={ChangePassword} />
      <Route path="/Entry/login" exact component={Login} />
      <Route path="/Entry/login" exact component={Login} />
      <Route path="/Entry/login" exact component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
