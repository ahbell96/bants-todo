import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const TodoForm = ({ data, setData, establishSnackbar }) => {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ todo: "" }}
        validate={(values) => {
          console.log("values on validate : ", values);
          const errors = {};
          if (!values.todo) {
            errors.todo = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values onSubmit : ", values);
          if (values.todo === "") {
            establishSnackbar("error", "Please input some text", true);
          }
          if (values.todo.length > 0) {
            const tempData = data.length > 0 ? [...data] : [];
            const lastItem = data.pop();
            const { id } = lastItem; // get last id and increment...
            tempData.push({ id: id + 1, text: values.todo });
            console.log("tempData : ", tempData);
            setData([...tempData]);
            establishSnackbar("success", "text added!", true);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="todo" />
            <ErrorMessage name="todo" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
