import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


function PrivateRoute({authStatus, component: Component, ...rest}) {
  const renderComponent = (props) => (
    authStatus ?
    <Component
      {...props}
    />
    :
    <Redirect
      to='/login'
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
  authStatus: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  authStatus: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
