import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddUser from "../components/add-user/AddUser";
import EditUser from "../components/edit-user/EditUser";
// import styles from "./Users.module.css";

const Users = () => {
  return (
    <>
      <AddUser />
      <AllUsers />
    </>
  );
};

const AllUsers = () => {
  const [editId, setEditId] = useState(null);

  const onEdit = (id) => {
    setEditId(id);
  };

  const onHide = () => {
    setEditId(null);
  };
  return (
    <div className={`rounded border p-3`}>
      <EditUser
        data={{
          id: editId,
          forename: "for",
          surname: "surname",
          password: "pass",
          username: "user",
        }}
        onHide={onHide}
      />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Forename</th>
              <th scope="col">Surname</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>
                <IconButton
                  className={`fs-4`}
                  variant="warning"
                  onClick={() => onEdit("1")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton variant="danger" className={`ms-2 fs-4`}>
                  <FiTrash />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>
                <IconButton
                  className={`fs-4`}
                  variant="warning"
                  onClick={() => onEdit("2")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton variant="danger" className={`ms-2 fs-4`}>
                  <FiTrash />
                </IconButton>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>
                <IconButton
                  className={`fs-4`}
                  variant="warning"
                  onClick={() => onEdit("3")}
                  pending
                  spinnerWeight={1.2}
                >
                  <FiEdit />
                </IconButton>
                <IconButton variant="danger" className={`ms-2 fs-4`} pending>
                  <FiTrash />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
