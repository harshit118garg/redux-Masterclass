import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../api";

const AddUserModal = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [newUserData, setNewUserData] = useState({
    userName: "",
    userAge: 0,
    userEmail: "",
    userCity: "",
  });

  const manageNewUserData = (event) => {
    const { name, value } = event.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(newUserData));
    setNewUserData({
      userName: "",
      userAge: 0,
      userEmail: "",
      userCity: "",
    });
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" centered className="fs-3">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          <p className="fs-2">Add New User</p>
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body className="p-4">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              className="fs-2"
              name="userName"
              value={newUserData.userName}
              onChange={manageNewUserData}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="fs-2"
              name="userEmail"
              value={newUserData.userEmail}
              onChange={manageNewUserData}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              className="fs-2"
              name="userAge"
              value={newUserData.userAge}
              onChange={manageNewUserData}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              className="fs-2"
              name="userCity"
              value={newUserData.userCity}
              onChange={manageNewUserData}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="w-100 fs-3" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
