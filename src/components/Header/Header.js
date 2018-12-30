import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function Header(props) {
  return (
    <header className='layout-header'>
      <div className='container'>
        <h1 className='layout-title'>
          Saunter
        </h1>

        {
          props.authStatus &&
          <Button
            bsStyle='link'
            className='pull-right'
            onClick={props.singOut}
          >
            Sing out
          </Button>
        }

      </div>
    </header>
  );
}

Header.propTypes = {
  authStatus: PropTypes.bool,
  singOut: PropTypes.func.isRequired
}
