import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AddPath from './AddPath';


class AddPathContainer extends Component {
  constructor(props) {
    super(props);

    this.formData = {
      title: '',
      description: '',
      shortDescription: ''
    }

    this.state = {
      addPathDialogVisible: false
    };
  }

  addPath(formElements) {
    this.toggleAddPathDialog();

    for (let formElement of formElements) {
      if (typeof this.formData[formElement.name] !== 'undefined') {
        this.formData[formElement.name] = formElement.value
      }
    }

    this.props.addPath({
      ...this.formData,
      length: Math.ceil(Math.random() * 100) / 10
    });
  }

  toggleAddPathDialog() {
    this.setState({
      addPathDialogVisible: !this.state.addPathDialogVisible
    });
  }

  render() {
    return (
      <AddPath
        isVisible={this.state.addPathDialogVisible}
        toggleDialog={this.toggleAddPathDialog.bind(this)}
        addPath={this.addPath.bind(this)}
      />
    );
  }
}

AddPathContainer.propTypes = {
  addPath: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addPath: (path) => {
    dispatch({
      type: 'ADD_PATH',
      payload: path
    });
  }
});

export default connect(null, mapDispatchToProps)(AddPathContainer);
