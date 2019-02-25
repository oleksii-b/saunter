import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {signOut} from 'actions/signOut';
import propTypes from 'services/prop-types';


export default function Header({user, signOut}) {
  return (
    <header className='layout-header'>
      <div className='container'>
        <h1 className='layout-title'>
          Saunter
        </h1>

        {
          user
          &&
            <Button
              bsStyle='link'
              className='pull-right'
              onClick={signOut}
            >
              Sing out
            </Button>
        }

      </div>
    </header>
  );
}

Header.propTypes = {
  user: propTypes.user,
  signOut: PropTypes.func.isRequired
}
