import { useState } from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useHistory, useLocation } from "react-router-dom";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddTest from "../components/add-test";
import EditTest from "../components/edit-test";
import styles from "./Index.module.css";

const AllTests = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
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
        <EditTest
          data={{
            id: editId,
            name: "X",
            date: new Date().toISOString().split("T")[0],
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
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td className={`${styles.Actions}`}>
                <IconButton
                  variant="primary"
                  className={`fs-4`}
                  onClick={() => {
                    push(`${pathname}/test/1`);
                  }}
                >
                  <FiEye />
                </IconButton>
                <IconButton
                  className={`ms-2 fs-4`}
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
              <td className={`${styles.Actions}`}>
                <IconButton
                  variant="primary"
                  className={`fs-4`}
                  onClick={() => {
                    push(`${pathname}/test/2`);
                  }}
                >
                  <FiEye />
                </IconButton>
                <IconButton
                  className={`ms-2 fs-4`}
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
              <td className={`${styles.Actions}`}>
                <IconButton
                  variant="primary"
                  className={`fs-4`}
                  onClick={() => {
                    push(`${pathname}/test/3`);
                  }}
                >
                  <FiEye />
                </IconButton>
                <IconButton
                  className={`ms-2 fs-4`}
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

const Test = () => {
  return (
    <>
      <AddTest />
      <AllTests />
    </>
  );
};

export default Test;
