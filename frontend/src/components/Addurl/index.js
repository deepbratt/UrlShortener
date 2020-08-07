import React, { useState } from "react";
import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import { isUrlValid, shortUrl } from "./../../utils/gen.utils";
const Addurl = () => {
  const [link, setLink] = useState(null);
  const [errors, setErrors] = useState(true);

  const handleChange = (e) => {
    console.log(isUrlValid(e.target.value));
    if (isUrlValid(e.target.value)) {
      setLink(e.target.value);
      setErrors(false);
    }
  };
  const submitForm = () => {
    console.log(link);
    console.log("shortUrl", shortUrl(5));
  };
  return (
    <Container style={{ backgroundColor: "#e9ecef" }}>
      <Jumbotron>
        <h3>Paste the URL to be shortened</h3>
        <Row>
          <Col md={8}>
            <Form.Group>
              <Form.Control
                size="lg"
                type="link"
                placeholder="Enter the link here."
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button
              variant="primary"
              size="lg"
              block
              onClick={submitForm}
              disabled={errors ? true : false}
            >
              Shorten Url
            </Button>
          </Col>
        </Row>
        <p>It is a free tool to shorten a URL or reduce a link.</p>
        <p>
          URL Shortener to create a shortened link making it easy to remember.
        </p>
      </Jumbotron>
    </Container>
  );
};
export default Addurl;
