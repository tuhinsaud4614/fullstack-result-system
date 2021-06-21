import { memo, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddClass from "../components/add-class";
import EditClass from "../components/edit-class";
import styles from "./Index.module.css";

const AllClasses = () => {
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
        <EditClass
          data={{
            id: editId,
            name: "X",
            pupils: [],
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

const Classes = () => {
  return (
    <>
      <AddClass />
      <AllClasses />
    </>
  );
};

export default memo(Classes);
