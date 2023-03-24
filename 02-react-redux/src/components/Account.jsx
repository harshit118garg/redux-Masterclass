import React, { useState } from "react";
import { Button, Col, Container, InputGroup, Row, Form } from "react-bootstrap";

function Account() {
  const [value, setValue] = useState();
  const [account, setAccount] = useState({ amount: 0 });

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <h3 className="display-2 text-uppercase fw-semibold text-light">
              Account Component
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="display-4 text-uppercase fw-light">
              Amount : Rs.{account.amount}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={increment}>Increment +</Button>
          </Col>
          <Col>
            <Button onClick={decrement}>Decrement -</Button>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control
                type="number"
                name="value"
                value={value}
                onChange={(e) => setValue(+e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button onClick={() => incrementByAmount(value)}>
              Increment By +
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;