import "./App.css";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddUserModal from "./components/AddUserModal";
import axios from "axios";
import UserListTable from "./components/UserListTable";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const data = await axios.get(`http://localhost:3000/users`);
    setUsersList(data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <div className="heading p-2 text-center">
          <h3 className="text-uppercase fs-3 fw-bolder">Users Manual</h3>
        </div>
        <hr />
        <Container className="bg-dark p-3 rounded-1 mt-3">
          <Button className="w-100 fs-2" onClick={() => setShowModal(true)}>
            Add New User
          </Button>
        </Container>
        <AddUserModal show={showModal} onHide={() => setShowModal(false)} />
        <hr />
        <Container className="mt-5">
          {usersList && usersList.length > 0 && (
            <UserListTable usersList={usersList} />
          )}
        </Container>
      </Container>
    </div>
  );
}

export default App;
