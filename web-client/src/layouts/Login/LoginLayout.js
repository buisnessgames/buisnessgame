import React from "react";
import { Container, Row, Col } from "shards-react";

const LoginLayout = ({ children }) => (
    <>
    <div className="login_background"></div>
  <Container fluid>
        {children}
  </Container>
  </>
);

export default LoginLayout;
