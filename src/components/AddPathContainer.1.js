import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddPath from './AddPath/AddPath';
import FormField from './FormField';


class AddPathContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addPathFormVisible: false
    };
  }

  addPath(values) {
    this.toggleAddPathDialog();

    this.props.addPath({
      title: 'New path',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      length: 3
    });
  }

  toggleAddPathDialog() {
    this.setState({
      addPathDialogVisible: !this.state.addPathDialogVisible
    });
  }

  render() {
    return (
      <div>
        <form>
          <FormField/>
        </form>
        <AddPath
          isVisible={this.state.addPathDialogVisible}
          toggleDialog={this.toggleAddPathDialog.bind(this)}
          addPath={this.addPath.bind(this)}
        />
      </div>
    );
  }
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
