import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {signOut} from 'actions/signOut';
import Header from './Header';
import propTypes from 'services/prop-types';


function HeaderContainer(props) {
  return (
    <Header
      user={props.user}
      signOut={props.signOut}
    />
  );
}

HeaderContainer.propTypes = {
  user: propTypes.user
}

const mapStateToProps = (state) => ({
  user: state.signIn.user
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
