import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { increment } from "../slices/bonusSlice";
import { useSelector, useDispatch } from "react-redux";

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
              Bonus Component
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="display-4 text-uppercase fw-light">
              Total Points : Rs.{points}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Bonus;
