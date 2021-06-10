import { memo, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddSubject from "../components/add-subject";
import EditSubject from "../components/edit-subject";
import styles from "./Index.module.css";

const AllSubjects = () => {
  const [editId, setEditId] = useState(null);

  const onEdit = (id) => {
    setEditId(id);
  };

  const onHide = () => {
    setEditId(null);
  };
  return (
    <div className={`rounded border p-3`}>
      {editId && (
        <EditSubject
          data={{
            id: editId,
            name: "X",
            className: "red",
            teacher: "yellow",
          }}
          onHide={onHide}
        />
      )}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Teacher</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td className={`${styles.Actions}`}>
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
              <td className={`${styles.Actions}`}>
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
              <td className={`${styles.Actions}`}>
                <IconButton
                  className={`fs-4`}
                  variant="warning"
                  onClick={() => onEdit("3")}
                >
                  <FiEdit />
                </IconButton>
                <IconButton variant="danger" className={`ms-2 fs-4`}>
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

const Subjects = () => {
  return (
    <div>
      <AddSubject />
      <AllSubjects />
    </div>
  );
};

export default memo(Subjects);
