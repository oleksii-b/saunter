import React from 'react';
import {Redirect} from 'react-router-dom';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


function LoginPage({authStatus, setAuthStatus}) {
  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    if (form.login.value === 'admin' && form.password.value === 'admin') {
      setAuthStatus(true);
    }
  }

  return (
    <div className='login-form container'>
      {
        authStatus ?
        <Redirect to='/' />
        :
        <form onSubmit={onFormSubmit}>
          <FormGroup>
            <ControlLabel>Login:</ControlLabel>

            <FormControl
              type='text'
              name='login'
              defaultValue='admin'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Password:</ControlLabel>

            <FormControl
              type='password'
              name='password'
              defaultValue='admin'
            />
          </FormGroup>

          <Button
            type='submit'
            bsClass='btn btn-primary btn-block'
          >
            Sign In
          </Button>
        </form>
      }
    </div>
  );
}

LoginPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
