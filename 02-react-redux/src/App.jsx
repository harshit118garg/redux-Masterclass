import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });

  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 });
  };

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
    <div className="App">
      <Container className="text-center">
        <Row>
          <Col className="bg-info bg-opacity-25">
            <h3 className="display-2 text-uppercase fw-semibold text-danger">
              App
            </h3>
            <h5>Current Amount in Account : Rs.{account.amount}</h5>
            <h5>Total Bonus Received : Rs.{bonus.points}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="bg-danger bg-opacity-50">
            <Account
              increment={increment}
              decrement={decrement}
              incrementByAmount={incrementByAmount}
              account={account}
            />
          </Col>
        </Row>
        <Row>
          <Col className="bg-secondary bg-opacity-25">
            <Bonus incrementBonus={incrementBonus} bonus={bonus} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
