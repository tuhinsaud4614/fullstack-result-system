import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";

import { fetchingOptions } from "../../../../store/admin/utility/add-subject/actions";
import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Select from "../../../../shared/components/select";
import styles from "./Index.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  className: Yup.string().required("Class is required!"),
  teacher: Yup.string().required("Teacher is required"),
});

const AddSubject = () => {
  const rdxDispatch = useDispatch();
  const { status, classes, teachers, error } = useSelector(
    (state) => state.adminUtilitySubjectOptions
  );

  useEffect(() => {
    rdxDispatch(fetchingOptions());
  }, [rdxDispatch]);

  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <div
        className={`${styles.Form} rounded-1 border mb-3 p-3 d-flex justify-content-center`}
      >
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === "complete" && error) {
    return (
      <div className={`${styles.Form} mb-3 alert alert-danger`} role="alert">
        Something went wong!
      </div>
    );
  }

  if (status === "complete" && (!classes.length || !teachers.length)) {
    return (
      <div className={`${styles.Form} rounded-1 border mb-3 p-3`}>
        <p className="text-danger m-0">
          <span className="fw-bolder">Classes</span> or{" "}
          <span className="fw-bolder">Teachers</span> may be not added.
        </p>
      </div>
    );
  }

  const values = {
    name: "",
    className: classes[0]["value"],
    teacher: teachers[0]["value"],
  };

  const submitted = async (values) => {
    console.log(values);
  };

  return (
    status === "complete" && (
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
            <form
              className={`${styles.Form} rounded-1 border mb-3 p-3`}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Input
                label="Name"
                id="name"
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
                    id="className"
                    name="className"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errorText={
                      touched.className && errors.className
                        ? errors.className
                        : null
                    }
                    defaultValue={classes[0]["value"]}
                    options={classes}
                  />
                </div>
                <div className={`col-12 col-sm-6`}>
                  <Select
                    label="Teacher"
                    id="teacher"
                    name="teacher"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errorText={
                      touched.teacher && errors.teacher ? errors.teacher : null
                    }
                    defaultValue={teachers[0]["value"]}
                    options={teachers}
                  />
                </div>
              </div>

              <Button
                className={`mt-3 fs-5 btn-warning btn-lg`}
                disabled={!(isValid && dirty)}
                type="submit"
                pending={isSubmitting}
              >
                Create
              </Button>
            </form>
          );
        }}
      </Formik>
    )
  );
};

export default AddSubject;
