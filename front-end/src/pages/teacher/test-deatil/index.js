import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useParams } from "react-router-dom";

import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddGrade from "../components/add-grade";
import EditGrade from "../components/edit-grade";
import styles from "./Index.module.css";

const AllPupils = () => {
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
        <EditGrade
          data={{
            id: editId,
            subject_id: "1",
            teacher_id: "1",
            grade: 1.5,
          }}
          onHide={onHide}
        />
      )}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Forename</th>
              <th scope="col">Surname</th>
              <th scope="col">Grade</th>
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

const TestDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <AddGrade />
      <AllPupils />
    </>
  );
};

export default TestDetail;
