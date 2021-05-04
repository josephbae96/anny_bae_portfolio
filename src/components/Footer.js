import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className='border-top justify-content'>
          <Col className='p-0' m={3} sm={12}>
            Anny Bae
          </Col>
          <Col className='p-0 d-flex justify-content-end' md={3}>
            Copyright © 2021 Anny Bae. All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
