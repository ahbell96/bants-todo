import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const UpdateDialog = ({
  open,
  handleClose,
  handleClickOpen,
  item,
  updateItem,
}) => {
  const [localText, setLocalText] = useState(item.text);

  return (
    <>
      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>Update item</DialogTitle>
        <DialogContent>
          <DialogContentText>Update your todo item.</DialogContentText>
          <Formik
            initialValues={{ id: item.id, todo: item.text }}
            validate={(values) => {
              console.log("values on validate : ", values);
              const errors = {};
              if (!values.todo) {
                errors.todo = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values in update : ", values);
              if (values.todo.length > 0) {
                console.log("value.todo : ", values.todo);
                updateItem(values.id, values.todo);
              }
            }}
          >
            {/* <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <TextField
                  defaultValue={item.text}
                  onChange={(e) => setLocalText(e.target.value)}
                />
              </FormControl>
            </Box> */}
            {({ isSubmitting }) => (
              <Form>
                <Field type="text" name="todo" defaultValue={item.text} />
                <ErrorMessage name="todo" component="div" />
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={() => updateItem(item.id, localText)}>Save</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};
