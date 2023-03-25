import React, { useState } from "react";
import { Button, Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementFn,
  decrementFn,
  incrementByAmountFn,
  getUser,
} from "../actions";

function Account({ increment, decrement, incrementByAmount }) {
  const [value, setValue] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

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
              Amount : Rs.{amount}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => dispatch(incrementFn())}>Inc</Button>
          </Col>
          <Col>
            <Button onClick={() => dispatch(decrementFn())}>Dec</Button>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control
                type="number"
                name="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button onClick={() => dispatch(incrementByAmountFn(value))}>
              Inc By
            </Button>
          </Col>
          <Col>
            <Button onClick={() => dispatch(getUser(3))}>Init Amount</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
