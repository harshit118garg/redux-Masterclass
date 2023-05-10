import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateUserModal = (props) => {
  return (
    <Modal {...props} size="lg" centered className="fs-3">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="fs-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              className="fs-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              className="fs-2"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="w-100 fs-3">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;
