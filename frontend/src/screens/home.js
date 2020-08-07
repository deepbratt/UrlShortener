import React, { Fragment } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
function Home() {
  return (
    <Fragment>
      <div
        style={{ alignContent: "center", flex: 1, justifyContent: "center" }}
      >
        <Alert key={1} variant="primary">
          URL SHORTENER
        </Alert>
      </div>

      <Container padder={10} style={{ marginBottom: 10 }}>
        <Row>
          <Col sm={12} md={6}>
            adsada
          </Col>

          <Col md={6} sm={12}>
            sdaasda
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;
