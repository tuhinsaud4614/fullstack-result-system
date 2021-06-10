import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";

import { fetchingOptions } from "../../../../store/admin/utility/add-subject/actions";
import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Modal from "../../../../shared/components/modal";
import Select from "../../../../shared/components/select";
// import styles from "./AddUser.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  className: Yup.string().required("Class is required!"),
  teacher: Yup.string().required("Teacher is required"),
});

const EditSubject = ({ data: { id, name, className, teacher }, onHide }) => {
  const rdxDispatch = useDispatch();
  const { status, classes, teachers, error } = useSelector(
    (state) => state.adminUtilitySubjectOptions
  );

  const values = {
    name: name || "",
    className: className || "",
    teacher: teacher || "",
  };

  const submitted = async (values) => {
    console.log(id, values);
    // onHide();
  };
  console.log(status, classes, teachers, error);

  useEffect(() => {
    rdxDispatch(fetchingOptions());
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

  if (status === "complete" && (!classes.length || !teachers.length)) {
    component = (
      <>
        <Modal.Body className="text-danger">
          <span className="fw-bolder">Classes</span> or{" "}
          <span className="fw-bolder">Teachers</span> may be not added.
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
                  <div className={`row g-3`}>
                    <div className={`col-12 col-sm-6`}>
                      <Select
                        label="Class"
                        id="edit-className"
                        name="className"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        errorText={
                          touched.className && errors.className
                            ? errors.className
                            : null
                        }
                        defaultValue={className}
                        options={classes}
                      />
                    </div>
                    <div className={`col-12 col-sm-6`}>
                      <Select
                        label="Teacher"
                        id="edit-teacher"
                        name="teacher"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        errorText={
                          touched.teacher && errors.teacher
                            ? errors.teacher
                            : null
                        }
                        defaultValue={teacher}
                        options={teachers}
                      />
                    </div>
                  </div>
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

export default EditSubject;
