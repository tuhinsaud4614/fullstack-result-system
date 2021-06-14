import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";

import { editTest } from "../../../../store/teacher/tests/actions";
import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Modal from "../../../../shared/components/modal";
// import styles from "./AddUser.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  date: Yup.date()
    .required("Date is required!")
    .max(
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      "Maximum date can be one day later"
    ),
});

const EditTest = ({ data: { id, name, date }, subjectId, onHide }) => {
  const rdxDispatch = useDispatch();
  const values = {
    name: name || "",
    date: date || "",
  };

  const submitted = async (values, {resetForm}) => {
    await rdxDispatch(editTest(subjectId, { id: id, ...values }));
    resetForm();
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
          <Modal
            id="modal"
            onHide={onHide}
            show={!!id}
            center
            scroll
            staticBack
          >
            <Modal.Header label={id} closeBtn />
            <form onSubmit={handleSubmit} autoComplete="off">
              <Modal.Body>
                <div className={`row g-3`}>
                  <div className="col-12 col-sm-6">
                    <Input
                      label="Name"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.name && errors.name ? errors.name : null
                      }
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <Input
                      label="Date"
                      id="date"
                      name="date"
                      type="date"
                      placeholder="date"
                      value={values.date}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={
                        touched.date && errors.date ? errors.date : null
                      }
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
          </Modal>
        );
      }}
    </Formik>
  );
};

export default EditTest;
