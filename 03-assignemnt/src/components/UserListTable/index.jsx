import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { VscTrash } from "react-icons/vsc";
import UpdateUserModal from "../UpdateUserModal";

const UserListTable = ({ usersList }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <Table>
        <thead>
          <tr className="text-bg-danger">
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => setShowUpdateModal(true)}
                  >
                    <MdEdit />
                  </Button>
                </td>
                <td>
                  <Button variant="danger">
                    <VscTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <UpdateUserModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
      />
    </>
  );
};

export default UserListTable;
