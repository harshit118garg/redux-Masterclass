import React, { useState } from "react";
import { Col, Container, Row, Spinner, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);

  const { pending, amount, error } = account;

  return (
    <div className="App">
      <Container className="text-center">
        <Row>
          <Col className="bg-info bg-opacity-25">
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
              App
            </h3>
            {pending ? (
              <Button variant="danger" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
            ) : error ? (
              <Badge bg="danger">{error}</Badge>
            ) : (
              <h5>Current Amount in Account : Rs.{amount}</h5>
            )}
            <h5>Total Bonus Received : Rs.{points}</h5>
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
