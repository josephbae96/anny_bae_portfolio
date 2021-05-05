import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Featured(props) {
  return (
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col md={8} sm={8}>
            {props.title && (
              <h1 className='display-1 font-weight-bold'>{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className='display-4 font-weight-light'>{props.subTitle}</h2>
            )}
            {props.text && <h3>{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Featured;
