import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import propTypes from 'services/prop-types';


function PrivateRoute({user, component: Component, ...rest}) {
  const renderComponent = (props) => (
    user === null
    ?
      <Redirect
        to='/login'
      />
    :
      <Component
        {...props}
      />
  );

  return (
    <Route
      {...rest}
      render={renderComponent}
    />
  );
}

PrivateRoute.propTypes = {
  user: propTypes.user,
  component: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.signIn.user
});

export default connect(mapStateToProps)(PrivateRoute);
