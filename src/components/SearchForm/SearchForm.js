import React from 'react';
import {FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function SearchForm(props) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()}>
      <FormGroup>
        <InputGroup>
          <FormControl
            type='text'
            onChange={props.onInputChange}
          />
          <InputGroup.Addon>
            <Glyphicon
              glyph='search'
            />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    </form>
  );
}

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired
}
