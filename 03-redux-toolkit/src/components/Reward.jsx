import React, { useState } from "react";
import { Col, Container, Row, Button, InputGroup, Form } from "react-bootstrap";
import { increment, incrementByAmount } from "../reducers/rewardReducer";
import { useSelector, useDispatch } from "react-redux";

function Reward() {
  const [value, setValue] = useState(0);
  const reward = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
              Reward Component
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="display-4 text-uppercase fw-light">
              Total Points : Rs.{reward}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control
                className="bg-dark text-light"
                type="number"
                name="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button onClick={() => dispatch(incrementByAmount(value))}>
              Inc By
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Reward;
