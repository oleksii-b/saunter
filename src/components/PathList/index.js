import React, {Component, Fragment} from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PathList from './PathList';
import SearchFormContainer from 'components/SearchForm';
import propTypes from 'services/prop-types';


class PathListContainer extends Component {
  constructor(props) {
    super(props);

    this.perPage = 3;

    const paths = this.getSortedPaths([...this.props.paths]);

    this.state = {
      paths,
      pageCount: Math.ceil(paths.length / this.perPage),
      currentPage: 0,
      currentPaths: this.getCurrentPaths(paths, 0)
    };
  }

  componentWillReceiveProps(nextProps) {
    // Rerender the component when store has been updated
    if (JSON.stringify(nextProps.paths) !== JSON.stringify(this.props.paths)) {
      this.setState(() => {
        const paths = this.getSortedPaths([...nextProps.paths]),
          pageCount = Math.ceil(nextProps.paths.length / this.perPage);

        let nextState = {
          paths,
          pageCount
        };

        if (nextProps.paths.length < this.props.paths.length) {
          nextState = this.getNewState(nextState, paths, 0);
        } else if (nextProps.paths.length > this.props.paths.length) {
          nextState = this.getNewState(nextState, paths, pageCount - 1);
        } else {
          nextState = this.getNewState(nextState, paths, this.state.currentPage);
        }

        return nextState;
      });
    }
  }

  getSortedPaths(paths) {
    return paths.sort((prevPath, nextPath) => {
      if (prevPath.isFavorite && !nextPath.isFavorite) {
        return -1;
      }

      if (!prevPath.isFavorite && nextPath.isFavorite) {
        return 1;
      }

      return 0;
    });
  }

  getCurrentPaths(paths, currentPage) {
    return [...paths].slice(currentPage * this.perPage, currentPage * this.perPage + this.perPage);
  }

  getNewState(nextState, paths, currentPage) {
    return {
      ...nextState,
      currentPage,
      currentPaths: this.getCurrentPaths(paths, currentPage)
    };
  }

  search(searchQuery) {
    const pathList = (this.getSortedPaths(this.props.paths)).filter(function(path) {
      const pathInfo = {
        title: path.title.toLowerCase(),
        description: path.shortDescription.toLowerCase(),
      }

      for (let prop in pathInfo) {
        if (pathInfo[prop].indexOf(searchQuery.toLowerCase()) > -1) {
          return true;
        }
      }

      return false;
    });

    this.setState({
      paths: [...pathList],
      pageCount: Math.ceil(pathList.length / this.perPage),
      currentPage: 0,
      currentPaths: this.getCurrentPaths(pathList, 0)
    });
  }

  viewDetails(id) {
    //document.getElementById('pathContent').classList.add('active-details');
    // new URLSearchParams(this.props.location.search).set('id', id);
  }

  handlePageClick(data) {
    const paths = [...this.state.paths],
      selected = data.selected;

    this.setState({
      pageCount: Math.ceil(paths.length / this.perPage),
      currentPage: selected,
      currentPaths: this.getCurrentPaths(paths, selected)
    });
  };

  render() {
    return (
      <Fragment>
        <SearchFormContainer
          search={this.search.bind(this)}
        />

        <PathList
          activePathId={new URLSearchParams(this.props.location.search).get('id')}
          pathList={this.state.currentPaths}
          viewDetails={this.viewDetails.bind(this)}
        />

        {
          (this.state.paths.length > this.perPage) &&
          <div className='text-center'>
            <ReactPaginate
              previousLabel={'‹'}
              nextLabel={'›'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              initialPage={this.state.currentPage}
              forcePage={this.state.currentPage}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick.bind(this)}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
        }
      </Fragment>
    );
  }
}

PathListContainer.propTypes = {
  paths: PropTypes.arrayOf(propTypes.path).isRequired
}

const mapStateToProps = (state) => ({
  paths: [...state.paths]
});

export default connect(mapStateToProps)(PathListContainer);
