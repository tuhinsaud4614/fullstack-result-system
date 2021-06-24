import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import qs from "query-string";

import { getValidObjectValue } from "../../../shared/utils";
import { fetchingAverageGrades } from "../../../store/teacher/average-grades/actions";
import TableBox from "../../../shared/components/table-box";
import styles from "./Index.module.css";

const Pupil = () => {
  const params = useParams();
  const { search } = useLocation();
  const subjectId = getValidObjectValue("subjectId", params);
  const rdxDispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.teacherAverageGrades
  );
  const gsResult = qs.parse(search);

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
      <TableBox
        className="alert alert-danger"
        title={`Average Grades (Class: ${gsResult.class.toUpperCase()} - Subject: ${gsResult.subject.toUpperCase()})`}
      >
        <ul className={`m-0`}>
          {error.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </TableBox>
    );
  }

  if (status === "complete" && !data.length) {
    return (
      <TableBox
        title={`Average Grades (Class: ${gsResult.class.toUpperCase()} - Subject: ${gsResult.subject.toUpperCase()})`}
      >
        <p className="text-danger m-0">
          No data <span className="fw-bolder">found</span>
        </p>
      </TableBox>
    );
  }

  return (
    <TableBox
      title={`Average Grades (Class: ${gsResult.class.toUpperCase()} - Subject: ${gsResult.subject.toUpperCase()})`}
    >
      <div className="table-responsive">
        <table className={`table ${styles.Table}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Average Grades</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={d.user_id}>
                <th scope="row">{index + 1}</th>
                <td>
                  {d.fname} {d.lname} ({d.userid})
                </td>
                <td>{d.average_grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableBox>
  );
};

export default Pupil;
