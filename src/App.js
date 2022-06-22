import "./App.css";
import { Box, Container, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { TodoForm } from "./components/todoForm";
import { Content } from "./components/content";

const App = () => {
  const [data, setData] = useState([]);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setData([
      { id: 1, text: "hello 1" },
      { id: 2, text: "hello 2" },
      { id: 3, text: "hello 3" },
    ]);
  }, []);

  useEffect(() => {
    if (snackbarOpen) {
      setTimeout(() => {
        setSnackbarOpen(false);
      }, [1500]);
    }
  }, [snackbarOpen]);

  const handleClickOpen = () => {
    setOpenUpdateDialog(true);
  };

  const handleClose = () => {
    setOpenUpdateDialog(false);
  };

  const establishSnackbar = (severity, message, open) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(open);
  };

  const updateItem = (id, text) => {
    const tempData = data.length > 0 ? [...data] : [];
    tempData.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
      return item;
    });

    setData([...tempData]);
    handleClose();
    establishSnackbar("success", "Item successfully updated.", true);
  };

  const removeItem = (item) => {
    const tempData = data.filter((i) => i.id !== item.id);
    setData([...tempData]);
    establishSnackbar("success", "Item successfully removed.", true);
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        gap={"5em"}
      >
        <Header />
        <TodoForm
          data={data}
          setData={setData}
          establishSnackbar={establishSnackbar}
        />
        <Content
          data={data}
          setData={setData}
          openUpdateDialog={openUpdateDialog}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          updateItem={updateItem}
          removeItem={removeItem}
          establishSnackbar={establishSnackbar}
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default App;
