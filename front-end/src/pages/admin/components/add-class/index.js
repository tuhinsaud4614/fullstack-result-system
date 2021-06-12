import * as Yup from "yup";
import { Formik } from "formik";

import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import styles from "./Index.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
});

const AddClass = () => {
  const values = {
    name: "",
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
            <div className={`d-flex align-items-start`}>
              <div className="flex-grow-1">
                <Input
                  label="Forename"
                  id="forename"
                  name="forename"
                  type="text"
                  placeholder="forename"
                  value={values.forename}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorText={
                    touched.forename && errors.forename ? errors.forename : null
                  }
                />
              </div>
              <Button
                className={`ms-3 fs-5 btn-warning`}
                disabled={!(isValid && dirty)}
                type="submit"
                pending={isSubmitting}
              >
                Create
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddClass;
