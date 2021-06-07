import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddUser from "../components/add-user/AddUser";
import EditUser from "../components/edit-user/EditUser";
import styles from "./Users.module.css";

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
  return (
    <div className={`rounded border p-3`}>
      <EditUser
        id={editId}
        forename="for"
        surname="surname"
        password="pass"
        username="user"
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
                  className={`fs-4 ${styles.EditBtn}`}
                  pendingClassName={`${styles.EditPending}`}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => onEdit("1")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton
                  className={`ms-3 fs-4 ${styles.DelBtn}`}
                  pendingClassName={`${styles.Pending}`}
                >
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
                  className={`fs-4 ${styles.EditBtn}`}
                  pendingClassName={`${styles.EditPending}`}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => onEdit("2")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton
                  className={`ms-3 fs-4 ${styles.DelBtn}`}
                  pendingClassName={`${styles.Pending}`}
                >
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
                  className={`fs-4 ${styles.EditBtn}`}
                  pendingClassName={`${styles.EditPending}`}
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => onEdit("3")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton
                  className={`ms-3 fs-4 ${styles.DelBtn}`}
                  pendingClassName={`${styles.Pending}`}
                >
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
