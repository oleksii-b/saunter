import React from 'react';
import {Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

import PathListContainer from 'components/PathList';
import PathDetailsContainer from 'components/PathDetails';
import AddPathContainer from 'components/AddPath';


export default function PathsPage() {
  return (
    <div className='main-content'>
      <Grid>
        <Row>
          <Col
            xs={6}
          >
            <Route
              path='/'
              component={PathListContainer}
            />
          </Col>

          <Col
            xs={6}
          >
            <div className='text-right'>
              <AddPathContainer />

              <hr />
            </div>

            <Route
              path='/'
              component={PathDetailsContainer}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
