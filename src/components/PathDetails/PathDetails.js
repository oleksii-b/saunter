import React, {Fragment} from 'react';
import {Alert, Button, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';

import AddPathContainer from 'components/AddPath';
import propTypes from 'services/prop-types';


export default function PathDetails(props) {
  const pathInfo = props.pathInfo;

  return (
    <Fragment>
      {
        pathInfo === null ?
        <Alert
          bsStyle='danger'
        >
          <h5 className='h4 text-center'>
            The path <small>«</small><b>{props.pathId}</b><small>»</small> doesn't exist
          </h5>
        </Alert>
        :
        <article className='path-details'>
          <h2 className='path-details__title h3'>
            {
              pathInfo.isFavorite &&
              <small className='path-details__icon'>
                <Glyphicon
                  glyph='star'
                />
              </small>
            }

            <span className='path-details__title-text'>{pathInfo.title}</span>
            <small>{pathInfo.length}&nbsp;km</small>
          </h2>

          {pathInfo.description}

          <div className='path-btn-group'>
            <Button
              className='btn btn-link'
              onClick={props.onLinkToggleFavoriteClick}
            >
              {pathInfo.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </Button>
            &nbsp;
            <Button
              bsClass='btn btn-danger'
              onClick={props.onLinkRemoveClick}
            >
              Delete
            </Button>
          </div>
        </article>
      }
    </Fragment>
  );
}

PathDetails.propTypes = {
  pathId: PropTypes.string.isRequired,
  pathInfo: propTypes.path,
  onLinkRemoveClick: PropTypes.func.isRequired,
  onLinkToggleFavoriteClick: PropTypes.func.isRequired
}
