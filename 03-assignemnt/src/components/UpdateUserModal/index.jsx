import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUser } from "../../api";

const UpdateUserModal = (props) => {
  const dispatch = useDispatch();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { user } = props;
  const [updateUserData, setUpdateUserData] = useState({
    userName: user.userName,
    userAge: user.userAge,
    userEmail: user.userEmail,
    userCity: user.userCity,
  });
  const manageUpdateUserData = (event) => {
    const { name, value } = event.target;
    setUpdateUserData({ ...updateUserData, [name]: value });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: user.id, updateUserData: updateUserData }));
    setShowUpdateModal(false);
    alert('user data updated')
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={() => {
          setShowUpdateModal(true);
        }}
      >
        <MdEdit />
      </Button>
      <Modal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        size="lg"
        centered
        className="fs-3"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center"
          >
            <p className="fs-2">Update Existing User</p>
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
                value={updateUserData.userName}
                onChange={manageUpdateUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="fs-2"
                name="userEmail"
                value={updateUserData.userEmail}
                onChange={manageUpdateUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                className="fs-2"
                name="userAge"
                value={updateUserData.userAge}
                onChange={manageUpdateUserData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                className="fs-2"
                name="userCity"
                value={updateUserData.userCity}
                onChange={manageUpdateUserData}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="w-100 fs-3" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateUserModal;
