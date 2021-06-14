import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getValidObjectValue } from "../../../shared/utils";
import { fetchingAverageGrades } from "../../../store/teacher/average-grades/actions";
import styles from "./Index.module.css";

const Pupil = () => {
  const params = useParams();
  const subjectId = getValidObjectValue("subjectId", params);
  const rdxDispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.teacherAverageGrades
  );
  // console.log(data);

  useEffect(() => {
    if (subjectId) {
      rdxDispatch(fetchingAverageGrades(subjectId));
    }
  }, [rdxDispatch, subjectId]);

  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <div className={`rounded-1 border p-3 d-flex justify-content-center`}>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === "complete" && error) {
    return (
      <div className={`rounded-1 border p-3 alert alert-danger`} role="alert">
        Something went wong!
      </div>
    );
  }

  if (status === "complete" && !data.length) {
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
      <div className="table-responsive">
        <table className={`table ${styles.Table}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Subject</th>
              <th scope="col">Average Grades</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={d.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {d.pupil.forename} {d.pupil.surname}
                </td>
                <td>{d.class.name}</td>
                <td>{d.subject.name}</td>
                <td>{d.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pupil;
