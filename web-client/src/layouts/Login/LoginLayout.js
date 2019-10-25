import React from "react";
import { Container, Row, Col } from "shards-react";

const LoginLayout = ({ children }) => (
    <div class="login_background">
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {children}
      </Col>
    </Row>
  </Container>
  </div>
);

export default LoginLayout;
