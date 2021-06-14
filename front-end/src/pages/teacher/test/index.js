import { useCallback, useEffect, useState } from "react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";

import {
  deleteTest,
  fetchingTests,
} from "../../../store/teacher/tests/actions";
import { getValidObjectValue } from "../../../shared/utils";
import Confirmation from "../../../shared/components/confirmation";
import IconButton from "../../../shared/components/button/icon-button/IconButton";
import SubHeader from "../components/header/SubHeader";
import AddTest from "../components/add-test";
import EditTest from "../components/edit-test";
import styles from "./Index.module.css";

const AllTests = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const params = useParams();
  const rdxDispatch = useDispatch();
  const { status, data, error } = useSelector((state) => state.teacherTests);
  const [edit, setEdit] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const subjectId = getValidObjectValue("subjectId", params);

  const onEdit = (obj) => {
    setEdit(obj);
  };

  const onHide = useCallback(() => {
    setEdit(null);
  }, []);

  const onDelete = async () => {
    await rdxDispatch(deleteTest(subjectId, deleteItem.id));
    setDeleteItem(null);
  };

  useEffect(() => {
    if (subjectId) {
      rdxDispatch(fetchingTests(subjectId));
    }
  }, [rdxDispatch, subjectId]);

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
      {edit && (
        <EditTest
          data={{
            ...edit,
          }}
          subjectId={subjectId}
          onHide={onHide}
        />
      )}
      {deleteItem && (
        <Confirmation
          id={deleteItem.id}
          title={deleteItem.name}
          handler={onDelete}
          pending={status.delete === "loading"}
          onHide={() => {
            setDeleteItem(null);
          }}
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
            {data.map((d, index) => (
              <tr key={d.id}>
                <th scope="row">{index + 1}</th>
                <td>{d.name}</td>
                <td>{d.date}</td>
                <td className={`${styles.Actions}`}>
                  <IconButton
                    variant="primary"
                    className={`fs-4`}
                    onClick={() => {
                      push(`${pathname}/test/${d.id}`);
                    }}
                  >
                    <FiEye />
                  </IconButton>
                  <IconButton
                    className={`ms-2 fs-4`}
                    variant="warning"
                    onClick={() => onEdit({ ...d })}
                  >
                    <FiEdit />
                  </IconButton>
                  <IconButton
                    variant="danger"
                    className={`ms-2 fs-4`}
                    onClick={() => setDeleteItem({ id: d.id, name: d.name })}
                  >
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

const Test = () => {
  return (
    <>
      <SubHeader>Tests</SubHeader>
      <AddTest />
      <AllTests />
    </>
  );
};

export default Test;
