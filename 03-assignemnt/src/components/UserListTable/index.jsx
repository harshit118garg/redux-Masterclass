import React from "react";
import { Button, Table } from "react-bootstrap";
import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../api";
import UpdateUserModal from "../UpdateUserModal";

const UserListTable = ({ usersList }) => {
  const dispatch = useDispatch();

  return (
    <Table hover responsive>
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
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              <td>{user.userAge}</td>
              <td>{user.userCity}</td>
              <td>
                <UpdateUserModal user={user} />
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    if (
                      confirm("are you sure, you want to delete this user..?")
                    ) {
                      dispatch(deleteUser(user.id));
                    }
                  }}
                >
                  <VscTrash />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserListTable;
