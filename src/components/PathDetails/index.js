import React, {Fragment} from 'react';
import {Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PathDetails from './PathDetails';
import propTypes from 'services/prop-types';


function PathDetailsContainer(props) {
  const pathId = new URLSearchParams(props.location.search).get('id');

  let pathInfo = null;

  for (let path of props.paths) {
    if (pathId === path.id) {
      pathInfo = {...path};

      break;
    }
  }

  const onLinkRemoveClick = () => {
    if (pathInfo) {
      props.removePath(pathInfo.id);
      location = '/';
    }
  }

  const onLinkToggleFavoriteClick = () => {
    if (pathInfo) {
      props.updatePath({
        ...pathInfo,
        isFavorite: !pathInfo.isFavorite
      });
    }
  }

  return (
    <Fragment>
      {
        pathId === null ?
        <Alert
          bsStyle='warning'
        >
          <h5 className='h4 text-center'>
            No path selected
          </h5>
        </Alert>
        :
        <PathDetails
          pathId={pathId}
          pathInfo={pathInfo}
          onLinkRemoveClick={onLinkRemoveClick}
          onLinkToggleFavoriteClick={onLinkToggleFavoriteClick}
        />
      }
    </Fragment>
  );
}

PathDetailsContainer.propTypes = {
  paths: PropTypes.arrayOf(propTypes.path).isRequired,
  removePath: PropTypes.func.isRequired,
  updatePath: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  paths: state.paths
});

const mapDispatchToProps = (dispatch) => ({
  removePath: (pathId) => {
    dispatch({
      type: 'REMOVE_PATH',
      payload: pathId
    });
  },

  updatePath: (path) => {
    dispatch({
      type: 'UPDATE_PATH',
      payload: path
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PathDetailsContainer);
