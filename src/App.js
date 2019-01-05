import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HeaderContainer from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import HomePage from './pages/Home';
import PathsPage from './pages/Paths';
import NotFoundPage from './pages/NotFound';


export default function App() {
  return (
    <Fragment>
      <HeaderContainer />

      <Redirect
        from='/saunter'
        to='/'
      />

      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />

        <Route
          path='/login'
          component={LoginPage}
        />

        <Route
          path='/sign-up'
          component={SignUpPage}
        />

        <PrivateRoute
          exact
          path='/paths'
          component={PathsPage}
        />

        <Route
          component={NotFoundPage}
        />
      </Switch>
    </Fragment>
  );
}
