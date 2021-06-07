import * as Yup from "yup";
import { Formik } from "formik";

import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Modal from "../../../../shared/components/modal";
// import styles from "./AddUser.module.css";

const Schema = Yup.object().shape({
  forename: Yup.string().required("Forename is required!"),
  surname: Yup.string().required("Forename is required!"),
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

const EditUser = ({
  data: { id, forename, surname, username, password },
  onHide,
}) => {
  const values = {
    forename: forename || "",
    surname: surname || "",
    username: username || "",
    password: password || "",
  };

  const submitted = async (values) => {
    console.log(id, values);
    onHide();
  };

  return (
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
          <Modal id="modal" onHide={onHide} show={!!id}>
            <Modal.Header label={id} closeBtn />
            <form onSubmit={handleSubmit} autoComplete="off">
              <Modal.Body>
                <div className={`row mb-3 g-3`}>
                  <div className={`col-12 col-sm-6`}>
                    <Input
                      label="Forename"
                      id="edit-forename"
                      name="forename"
                      type="text"
                      placeholder="forename"
                      value={values.forename}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.forename && errors.forename
                          ? errors.forename
                          : null
                      }
                    />
                  </div>
                  <div className={`col-12 col-sm-6`}>
                    <Input
                      label="Surname"
                      id="edit-surname"
                      name="surname"
                      type="text"
                      placeholder="surname"
                      value={values.surname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.surname && errors.surname
                          ? errors.surname
                          : null
                      }
                    />
                  </div>
                </div>
                <div className={`row g-3`}>
                  <div className={`col-12 col-sm-6`}>
                    <Input
                      label="Username"
                      id="edit-username"
                      name="username"
                      type="text"
                      placeholder="username"
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.username && errors.username
                          ? errors.username
                          : null
                      }
                    />
                  </div>
                  <div className={`col-12 col-sm-6`}>
                    <Input
                      label="Password"
                      id="edit-password"
                      name="password"
                      type="password"
                      placeholder="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.password && errors.password
                          ? errors.password
                          : null
                      }
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className={`fs-5 btn-warning btn-lg`}
                  disabled={!(isValid && dirty)}
                  type="submit"
                  pending={isSubmitting}
                >
                  Edit
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default EditUser;
