import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Row,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchUserById,
} from "../slices/accountSlice";

function Account() {
  const [value, setValue] = useState(0);
  const [id, setID] = useState(1);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
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
            <Button onClick={() => dispatch(increment())}>Inc</Button>
          </Col>
          <Col>
            <Button onClick={() => dispatch(decrement())}>Dec</Button>
          </Col>
          <Col>
            <InputGroup>
              <FloatingLabel label="value" className="text-light">
                <Form.Control
                  className="bg-dark text-light"
                  type="number"
                  name="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>
          <Col>
            <Button onClick={() => dispatch(incrementByAmount(value))}>
              Inc By
            </Button>
          </Col>
          <Col>
            <InputGroup>
              <FloatingLabel label="ID" className="text-light">
                <Form.Control
                  className="bg-dark text-light"
                  type="number"
                  name="value"
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                />
              </FloatingLabel>
            </InputGroup>
          </Col>
          <Col>
            <Button onClick={() => dispatch(fetchUserById(id))}>
              Init Amount
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
