import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";

import { fetchingPupilOptions } from "../../../../store/admin/utility/class-pupil-option/actions";
import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Modal from "../../../../shared/components/modal";
import PupilSelect from "./PupilSelect";
// import styles from "./AddUser.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
});


const EditClass = ({ data: { id, name, pupils }, onHide }) => {
  const rdxDispatch = useDispatch();
  const { status, options, error } = useSelector(
    (state) => state.adminUtilityClassPupilOptionOptions
  );

  const values = {
    name: name || "",
    pupils: pupils || [],
  };

  const submitted = async (values) => {
    console.log(id, values);
    // onHide();
  };
  console.log(status, options, error);

  useEffect(() => {
    rdxDispatch(fetchingPupilOptions());
  }, [rdxDispatch]);

  if (status === "idle") {
    return null;
  }

  let component = null;
  let isStatic = true;

  if (status === "loading") {
    component = (
      <Modal.Body className="d-flex justify-content-center">
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Modal.Body>
    );
  }

  if (status === "complete" && error) {
    component = (
      <>
        <Modal.Body>
          <div className={`alert alert-danger`} role="alert">
            Something went wong!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`fs-5 btn-warning`} onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </>
    );
    isStatic = false;
  }

  if (status === "complete" && !options.length) {
    component = (
      <>
        <Modal.Body className="text-danger">
          <span className="fw-bolder">Pupils</span> may be not added.
        </Modal.Body>
        <Modal.Footer>
          <Button className={`fs-5 btn-warning`} onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </>
    );
    isStatic = false;
  }

  if (status === "complete") {
    component = (
      <>
        <Modal.Header label={id} closeBtn />
        <Formik
          initialValues={values}
          onSubmit={submitted}
          validationSchema={Schema}
        >
          {({
            touched,
            isSubmitting,
            errors,
            values,
            isValid,
            dirty,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => {
            return (
              <form onSubmit={handleSubmit} autoComplete="off">
                <Modal.Body>
                  <Input
                    label="Name"
                    id="edit-name"
                    name="name"
                    type="text"
                    placeholder="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errorText={touched.name && errors.name ? errors.name : null}
                    classes={{ container: "mb-3" }}
                  />
                  <PupilSelect
                    options={options}
                    changeHandler={(p) => {
                      setFieldValue("pupils", p);
                    }}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className={`fs-5 btn-warning`}
                    disabled={!(isValid && dirty)}
                    type="submit"
                    pending={isSubmitting}
                  >
                    Edit
                  </Button>
                </Modal.Footer>
              </form>
            );
          }}
        </Formik>
      </>
    );
  }

  return (
    <Modal
      id="modal"
      onHide={onHide}
      show={!!id}
      center
      scroll
      staticBack={isStatic}
    >
      {component}
    </Modal>
  );
};

export default EditClass;
