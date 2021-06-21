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
            className={`${styles.Form} rounded-1 border m-0 mb-3 p-3 row g-3 align-items-sm-stretch`}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="col-12 col-sm-auto flex-sm-grow-1 p-0 pe-sm-3 m-sm-0">
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
              />
            </div>
            <Button
              className={`col-12 col-sm-auto m-sm-0 fs-5 btn-warning`}
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
  );
};

export default AddClass;
