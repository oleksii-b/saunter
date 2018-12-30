import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HeaderContainer from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import PathsPage from './pages/Paths';
import NotFoundPage from './pages/NotFound';


export default function App() {
  return (
    <Fragment>
      <HeaderContainer />

      <Switch>
        <Redirect
          from='/saunter'
          to='/'
        />

        <Route
          exact
          path='/'
          component={HomePage}
        />

        <Route
          path='/login'
          component={LoginPage}
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
