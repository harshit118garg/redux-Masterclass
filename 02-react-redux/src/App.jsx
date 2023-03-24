import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  return (
    <div className="App">
      <Container className="text-center">
        <Row>
          <Col className="bg-info bg-opacity-25">
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
              App
            </h3>
            <h5>Current Amount in Account : </h5>
            <h5>Total Bonus Received : </h5>
          </Col>
        </Row>
        <Row>
          <Col className="bg-danger bg-opacity-50">
            <Account />
          </Col>
        </Row>
        <Row>
          <Col className="bg-secondary bg-opacity-25">
            <Bonus />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
