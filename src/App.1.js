import React, {Fragment} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import HeaderContainer from './components/Header';
import PathsPage from './pages/PathsPage';
import NotFoundPage from './pages/NotFoundPage';


export default function App() {
  return (
    <Fragment>
      <HeaderContainer />

      <Switch>
        <Route
          exact
          path='/'
          component={PathsPage}
        />

        <Route
          path='/paths'
          component={PathsPage}
        />

        <Route
          path='/sign-in'
          component={PathsPage}
        />

        <Route
          component={NotFoundPage}
        />
      </Switch>
    </Fragment>
  );
}
