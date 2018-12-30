import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';


function HeaderContainer({authStatus, setAuthStatus}) {
  const singOut = () => {
    setAuthStatus(false)
  }

  return (
    <Header
      authStatus={authStatus}
      singOut={singOut}
    />
  );
}

HeaderContainer.propTypes = {
  authStatus: PropTypes.bool,
  setAuthStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  authStatus: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  setAuthStatus: (authStatus) => {
    dispatch({
      type: 'SET_AUTH_STATUS',
      payload: authStatus
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
