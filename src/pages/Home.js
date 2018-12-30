import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


function HomePage({authStatus}) {
  return (
    <Fragment>
      {
        authStatus ?
        <Redirect to='/paths' />
        :
        <Redirect to='/login' />
      }
    </Fragment>
  );
}

HomePage.propTypes = {
  authStatus: PropTypes.bool
}

const mapStateToProps = (state) => ({
  authStatus: state.auth
});

export default connect(mapStateToProps)(HomePage);
