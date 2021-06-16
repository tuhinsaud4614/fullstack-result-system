import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../../../shared/components/button";

const Schema = Yup.object().shape({
  grades: Yup.mixed()
    .required("Grades File is required!")
    .test(
      "fileFormat",
      "Only accepted csv file",
      (value) => !!value && ["text/csv"].includes(value.type)
    ),
});

const UploadGradeFile = () => {
  const values = {
    grades: "",
  };

  const submitted = async (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <div className={`rounded-1 border mb-3 p-3`}>
      <Formik
        initialValues={values}
        onSubmit={submitted}
        validationSchema={Schema}
      >
        {({
          touched,
          isSubmitting,
          errors,
          isValid,
          dirty,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <form
              style={{ width: "100%", maxWidth: "576px" }}
              onSubmit={handleSubmit}
            >
              <div className={`row g-3 align-items-sm-end`}>
                <div className={`col-12 col-sm-auto`}>
                  <label htmlFor="grades" className={`form-label`}>
                    Grades (Only csv File)
                  </label>
                  <input
                    className={`form-control ${
                      touched.grades && errors.grades ? "is-invalid" : ""
                    }`}
                    type="file"
                    name="grades"
                    id="grades"
                    accept=".csv"
                    onChange={(event) => {
                      if (
                        event.currentTarget.files &&
                        event.currentTarget.files.length === 1
                      ) {
                        const file = event.currentTarget.files[0];
                        setFieldTouched("grades", true);
                        setFieldValue("grades", file);
                      }
                    }}
                  />
                  {touched.grades && errors.grades && (
                    <div className={`invalid-feedback`}>{errors.grades}</div>
                  )}
                </div>
                <Button
                  className={`col-12 col-sm-auto fs-5 btn-warning`}
                  disabled={!(isValid && dirty)}
                  type="submit"
                  pending={isSubmitting}
                >
                  Upload
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UploadGradeFile;
