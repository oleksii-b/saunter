import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import propTypes from 'services/prop-types';


function HomePage({user}) {
  return (
    <Fragment>
      {
        user === null
        ?
          <Redirect
            to='/login'
          />
        :
          <Redirect
            to='/paths'
          />
      }
    </Fragment>
  );
}

HomePage.propTypes = {
  user: propTypes.user
}

const mapStateToProps = (state) => ({
  user: state.signIn.user
});

export default connect(mapStateToProps)(HomePage);
