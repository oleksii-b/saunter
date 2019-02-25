import React from 'react';
import {Redirect} from 'react-router-dom';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {signIn} from 'actions/signIn';
import propTypes from 'services/prop-types';


function LoginPage({user, error, signIn}) {
  const onFormSubmit = (evt) => {
    evt.preventDefault();

    signIn({
      login: form.login.value,
      pwd: form.password.value
    });
  }

  return (
    <div className='login-form container'>
      {
        user === null
        ?
          <form onSubmit={onFormSubmit}>
            <FormGroup>
              <ControlLabel>
                Login:
              </ControlLabel>

              <FormControl
                type='text'
                name='login'
                defaultValue='email@test.com'
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>
                Password:
              </ControlLabel>

              <FormControl
                type='password'
                name='password'
                defaultValue='123456'
              />
            </FormGroup>

            {
              error
              &&
                <Alert
                  bsStyle='danger'
                  className='text-center'
                >
                  {error}
                </Alert>
            }

            <Button
              type='submit'
              bsClass='btn btn-primary btn-block'
            >
              Sign In
            </Button>
          </form>
        :
          <Redirect to='/' />
      }
    </div>
  );
}

LoginPage.propTypes = {
  user: propTypes.user
}

const mapStateToProps = (state) => ({
  user: state.signIn.user,
  error: state.signIn.error
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (credentials) => dispatch(signIn(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
