import React, {Fragment} from 'react';
import {Alert, Col, Glyphicon, Grid, Row} from 'react-bootstrap';


export default function NotFound() {
  return (
    <Grid>
      <Row>
        <Col
          lg={8}
          md={10}
          lgOffset={2}
          mdOffset={1}
        >
          <Alert
            bsStyle='danger'
            className='text-center'
          >
            <span className='h2'>
              <span className='h3'>
                <Glyphicon
                  glyph='minus-sign'
                  className='text-danger'
                />
              </span>

              &nbsp;404 Error
            </span>

            <h3>
              The page was not found!
            </h3>
          </Alert>
        </Col>
      </Row>
    </Grid>
  );
}
