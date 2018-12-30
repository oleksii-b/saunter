import React, {Component, Fragment} from 'react';
import {FormGroup, FormControl, ControlLabel, Modal, Button} from 'react-bootstrap';


export default class AddPath extends Component {
  render() {
    return (
      <Fragment>
        <Button
          bsStyle='primary'
          onClick={this.props.toggleDialog}
        >
          Add path
        </Button>

        <Modal
          show={this.props.isVisible}
          onHide={this.props.toggleDialog}
        >
          <Modal.Header>
            <Modal.Title>
              Add new path
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form ref='form'>
              <FormGroup>
                <ControlLabel>Title:</ControlLabel>

                <FormControl
                  type='text'
                  name='title'
                />

                <FormControl.Feedback />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Short description:</ControlLabel>

                <FormControl
                  name='shortDescription'
                  componentClass='textarea'
                  rows='2'
                />

                <FormControl.Feedback />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Full description:</ControlLabel>

                <FormControl
                  name='description'
                  componentClass='textarea'
                  rows='5'
                />

                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={this.props.toggleDialog}
            >
              Cancel
            </Button>
            &nbsp;
            <Button
              bsStyle='primary'
              onClick={() => this.props.addPath(this.refs.form.elements)}
            >
              Save path
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
