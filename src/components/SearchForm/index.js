import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm';


export default class SearchFormContainer extends Component {
  onInputChange(evt) {
    const target = evt.target;

    this.props.search(target.value.trim() ? target.value.trim() : '');
  }

  render() {
    return (
      <SearchForm
        onInputChange={this.onInputChange.bind(this)}
      />
    );
  }
}

SearchFormContainer.propTypes = {
  search: PropTypes.func.isRequired
}
