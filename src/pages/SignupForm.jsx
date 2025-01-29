import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidationSchema } from "../components/validationSchemas";

const SignupForm = () => {
  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Signup Form</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signupValidationSchema} // Use the imported schema
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
