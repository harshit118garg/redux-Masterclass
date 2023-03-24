import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

function Bonus() {
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };

  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col>
            <h3 className="display-2 text-uppercase fw-semibold text-light">
              Bonus Component
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="display-4 text-uppercase fw-light">
              Total Points : Rs.{bonus.points}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={increment}>Increment +</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Bonus;
