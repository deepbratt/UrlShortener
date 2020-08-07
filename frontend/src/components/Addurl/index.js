import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Row,
  Spinner
} from "react-bootstrap";
import {
  API_URL,
  isUrlValid,
  shortUrlmake,
  SITE_URL
} from "./../../utils/gen.utils";
const Addurl = (props) => {
  const [link, setLink] = useState(null);
  const [errors, setErrors] = useState(true);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  const handleChange = (e) => {
    if (isUrlValid(e.target.value)) {
      setLink(e.target.value);
      setErrors(false);
    }
  };
  const submitForm = () => {
    setLoader(true);
    let shortUrlsave = shortUrlmake(5);
    axios
      .post(`${API_URL}/add`, { originalUrl: link, shortUrl: shortUrlsave })
      .then((res) => {
        setData(res.data);
        setLoader(false);
        setErrors(true);
        props.setNewData(res.data._id);
      });
  };
  return (
    <Container style={{ backgroundColor: "#e9ecef" }}>
      <Jumbotron>
        <h3>Paste the URL to be shortened</h3>
        {loader ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
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
            {data !== null ? (
              <>
                <p>
                  Long Url: <b>{data.OriginalUrl} </b>
                </p>
                <p>
                  Short Url: <b>{`${SITE_URL}${data.ShortUrl}`}</b>
                </p>
              </>
            ) : (
              <>
                <p>It is a free tool to shorten a URL or reduce a link.</p>
                <p>
                  URL Shortener to create a shortened link making it easy to
                  remember.
                </p>
              </>
            )}
          </>
        )}
      </Jumbotron>
    </Container>
  );
};
export default Addurl;
