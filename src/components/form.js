import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Form = ({ data, setData, establishSnackbar }) => {
  const [localText, setLocalText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (localText.length === 0) {
      // set snackbar with message, severity etc and return.
      establishSnackbar("error", "Please input some text", true);
      return;
    }

    const tempData = data.length > 0 ? [...data] : [];
    const lastItem = data.pop();
    const { id } = lastItem; // get last id and increment...
    tempData.push({ id: id + 1, text: localText });
    console.log("tempData : ", tempData);
    setData([...tempData]);
    setLocalText("");
    establishSnackbar("success", "text added!", true);
  };

  return (
    <Box>
      <form method="POST">
        <TextField onChange={(e) => setLocalText(e.target.value)} />
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </form>
    </Box>
  );
};
