import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getValidObjectValue } from "../../../shared/utils";
import { fetchingSubjectTestGrade } from "../../../store/pupil/subject-test-grade/actions";
import TableBox from "../components/table-box";

const SubjectTestGrade = () => {
  const params = useParams();
  const subjectId = getValidObjectValue("subjectId", params);
  const rdxDispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.pupilSubjectTestGrade
  );

  useEffect(() => {
    if (subjectId) {
      rdxDispatch(fetchingSubjectTestGrade("1", subjectId));
    }
  }, [rdxDispatch, subjectId]);

  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <TableBox title="Test Grade">
        <div className={`d-flex justify-content-center`}>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </TableBox>
    );
  }

  if (status === "complete" && error) {
    return (
      <TableBox title="Test Grade">
        <div className={`alert alert-danger`} role="alert">
          Something went wong!
        </div>
      </TableBox>
    );
  }

  return (
    <TableBox title="Test Grade">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject Name</th>
              <th scope="col">Test Name</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={el.id}>
                <th scope="row">{index + 1}</th>
                <td>{el.subjectName}</td>
                <td>{el.name}</td>
                <td>{el.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableBox>
  );
};

export default SubjectTestGrade;
