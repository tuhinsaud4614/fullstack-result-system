import { FiTrash } from "react-icons/fi";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddUser from "../components/add-user/AddUser";
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
  return (
    <div className={`rounded border p-3`}>
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
                  className={`p-0 fs-4 ${styles.DelBtn}`}
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
                  className={`p-0 fs-4 ${styles.DelBtn}`}
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
                  className={`p-0 fs-4 ${styles.DelBtn}`}
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
