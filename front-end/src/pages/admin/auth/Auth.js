import * as Yup from "yup";
import { Formik } from "formik";

import Button from "../../../shared/components/button";
import styles from "./Auth.module.css";

const Schema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

const Auth = () => {
  const values = {
    username: "",
    password: "",
  };

  const submitted = () => {};

  return (
    <div className={`${styles.Root} px-3`}>
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
              className={`${styles.Form}`}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className={`card`}>
                <div
                  className={`card-header bg-dark text-light fw-bold ${styles.Title}`}
                >
                  Admin Authentication
                </div>
                <div className={`card-body`}>
                  <div className={`form-floating mb-3`}>
                    <input
                      type="text"
                      className={`form-control ${
                        touched.username && errors.username ? "is-invalid" : ""
                      }`}
                      id="username"
                      name="username"
                      placeholder="username"
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <label htmlFor="username">Username</label>
                    {touched.username && errors.username && (
                      <div className={`invalid-feedback`}>
                        {errors.username}
                      </div>
                    )}
                  </div>
                  <div className={`form-floating`}>
                    <input
                      type="password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    {touched.password && errors.password && (
                      <div className={`invalid-feedback`}>
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
                <div className={`card-footer d-flex justify-content-end`}>
                  <Button
                    className={`fs-5 btn-warning btn-lg`}
                    disabled={!(isValid && dirty)}
                    type="submit"
                    pending={isSubmitting}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Auth;
