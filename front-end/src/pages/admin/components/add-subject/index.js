import * as Yup from "yup";
import { Formik } from "formik";

import Button from "../../../../shared/components/button";
import Input from "../../../../shared/components/input";
import Select from "../../../../shared/components/select";
import styles from "./Index.module.css";

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  className: Yup.string().required("Class name is required!"),
  teacher: Yup.string().required("Teacher is required"),
});

const AddSubject = () => {
  const values = {
    name: "",
    className: "",
    teacher: "",
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
                  defaultValue="red"
                  options={[
                    { name: "Red", value: "red" },
                    { name: "Green", value: "green" },
                  ]}
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
                  defaultValue="yellow"
                  options={[
                    { name: "Yellow", value: "yellow" },
                    { name: "Yellow", value: "yellow" },
                  ]}
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
  );
};

export default AddSubject;
