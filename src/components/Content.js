import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content(props) {
  return (
    <Container field={true}>
      <Row className='justify-content-center'>
        <Col md={18}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
