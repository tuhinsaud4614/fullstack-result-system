import * as Yup from "yup";
import { Formik } from "formik";

import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Modal from "../../../../shared/components/modal";
// import styles from "./AddUser.module.css";

const Schema = Yup.object().shape({
  grade: Yup.number().required("Grade is required!"),
});

const EditGrade = ({ data: { id, teacher_id, subject_id, grade }, onHide }) => {
  const values = {
    grade: grade || "",
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
                <Input
                  label="Grade"
                  id="grade"
                  name="grade"
                  type="number"
                  placeholder="grade"
                  value={values.grade}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={
                    touched.grade && errors.grade ? errors.grade : null
                  }
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
          </Modal>
        );
      }}
    </Formik>
  );
};

export default EditGrade;
