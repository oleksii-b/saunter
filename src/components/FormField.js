import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


export default class FormField extends Component {
  onFormSubmit() {
    this.props.getValidationState(this.input)
  }

  componentDidMount() {
    this.input.form.addEventListener('submit', this.onFormSubmit);
  }

  componentWillUnmount() {
    this.input.form.removeEventListener('submit', this.onFormSubmit);
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Title:</ControlLabel>

        <FormControl
          type='text'
          name='title'
          inputRef={(ref) => {this.input = ref;}}
          required
        />

        {
          this.props.validate && (() => {
            for (let i = 0; i < this.props.validate.length; this.props.validate++) {
              <div>
                {this.props.validate[i].errorMsg}
              </div>
            }
          })()
        }

        <FormControl.Feedback />
      </FormGroup>
    );
  }
}
