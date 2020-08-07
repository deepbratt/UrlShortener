import React from "react";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <h1
        style={{
          alignItems: "center",
          textAlign: "center",
          padding: 20,
          color: "#007bff",
        }}
      >
        URL Shortener
      </h1>
    </Container>
  );
};
export default Header;
