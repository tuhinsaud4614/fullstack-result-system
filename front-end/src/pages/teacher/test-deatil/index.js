import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { getValidObjectValue } from "../../../shared/utils";
import SubHeader from "../components/header/SubHeader";
import IconButton from "../../../shared/components/button/icon-button/IconButton";
import AddGrade from "../components/add-grade";
import EditGrade from "../components/edit-grade";
import styles from "./Index.module.css";
import { fetchingPupilTestGrade } from "../../../store/teacher/test-pupil-grade/actions";

const AllPupils = ({ subjectId, testId }) => {
  const rdxDispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.teacherPupilTestGrade
  );
  const [editId, setEditId] = useState(null);

  const onEdit = (id) => {
    setEditId(id);
  };

  const onHide = () => {
    setEditId(null);
  };

  useEffect(() => {
    if (subjectId) {
      rdxDispatch(fetchingPupilTestGrade(subjectId));
    }
  }, [rdxDispatch, subjectId, testId]);

  if (status.fetched === "idle") {
    return null;
  }

  if (status.fetched === "loading") {
    return (
      <div className={`rounded-1 border p-3 d-flex justify-content-center`}>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status.fetched === "complete" && error.fetched) {
    return (
      <div className={`rounded-1 border p-3 alert alert-danger`} role="alert">
        Something went wong!
      </div>
    );
  }

  if (status.fetched === "complete" && !data.length) {
    return (
      <div className={`rounded-1 border p-3`}>
        <p className="text-danger m-0">
          No data <span className="fw-bolder">found</span>
        </p>
      </div>
    );
  }

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
            {data.map((d, index) => (
              <tr key={d.id}>
                <th scope="row">{index + 1}</th>
                <td>{d.forename}</td>
                <td>{d.surname}</td>
                <td>{d.grade}</td>
                <td className={`${styles.Actions}`}>
                  <IconButton
                    className={`fs-4`}
                    variant="warning"
                    onClick={() => onEdit(d.id)}
                  >
                    <FiEdit />
                  </IconButton>
                  <IconButton variant="danger" className={`ms-2 fs-4`}>
                    <FiTrash />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TestDetail = () => {
  const params = useParams();
  const subjectId = getValidObjectValue("subjectId", params);
  const testId = getValidObjectValue("testId", params);

  return (
    <>
      <SubHeader>Pupil Test Grades</SubHeader>
      <AddGrade subjectId={subjectId} testId={testId} />
      <AllPupils subjectId={subjectId} testId={testId} />
    </>
  );
};

export default TestDetail;
