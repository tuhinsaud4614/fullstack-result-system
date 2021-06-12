import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Select from "../../../../shared/components/select";
import styles from "./Index.module.css";

const Schema = Yup.object().shape({
  pupil: Yup.string().required("Pupil is required!"),
  grade: Yup.number().required("Grade is required!"),
});

const AddGrade = () => {
  const values = {
    pupil: "",
    grade: "",
  };

  const submitted = async (values) => {
    console.log(values);
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
          <form
            className={`${styles.Form} rounded-1 border mb-3 p-3`}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className={`row g-3`}>
              <div className="col-12 col-sm-6">
                <Select
                  label="Pupil"
                  id="pupil"
                  name="pupil"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={
                    touched.pupil && errors.pupil
                      ? errors.pupil
                      : null
                  }
                  defaultValue={"ok"}
                  options={[{name : "Ok", "value": "ok"}]}
                />
              </div>
              <div className="col-12 col-sm-6">
                <Input
                  label="Grade"
                  id="grade"
                  name="grade"
                  type="number"
                  placeholder="grade"
                  value={values.grade}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={touched.grade && errors.grade ? errors.grade : null}
                />
              </div>
            </div>
            <Button
              className={`mt-3 fs-5 btn-warning`}
              disabled={!(isValid && dirty)}
              type="submit"
              pending={isSubmitting}
            >
              Add
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddGrade;
