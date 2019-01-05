import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Alert, Glyphicon, Media, Well} from 'react-bootstrap';
import PropTypes from 'prop-types';

import propTypes from 'services/prop-types';


export default function PathList(props) {
  return (
    <Fragment>
      {
        props.isLoaded
        ?
          !!props.pathList.length
          ?
            props.pathList.map((pathInfo) => (
              <Well
                key={pathInfo.id}
                bsSize='sm'
                className={'path-preview' + ((props.activePathId === pathInfo.id) ? ' path-preview--active' : '')}
              >
                <Link
                  to={'/paths?id=' + pathInfo.id}
                  className='path-preview__container'
                  onClick={props.viewDetails}
                >
                  <Media>
                    <Media.Body>
                      <Media.Heading
                        className='path-preview-header'
                      >
                        {
                          pathInfo.isFavorite &&
                          <Glyphicon
                            glyph='star'
                            className='path-preview-icon'
                          />
                        }

                        {pathInfo.title}
                      </Media.Heading>

                      {pathInfo.shortDescription}
                    </Media.Body>
                    <Media.Right>
                      {pathInfo.length}&nbsp;km
                    </Media.Right>
                  </Media>
                </Link>
              </Well>
            ))
          :
            <Alert
              bsStyle='warning'
            >
              <h5 className='h4 text-center'>
                No items found
              </h5>
            </Alert>
        :
          <h4 className='text-center'>
            Loading...
          </h4>
      }
    </Fragment>
  );
}

PathList.propTypes = {
  activePathId: PropTypes.string,
  pathList: PropTypes.arrayOf(propTypes.path).isRequired,
  viewDetails: PropTypes.func.isRequired
}
