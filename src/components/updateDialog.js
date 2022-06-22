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

export const UpdateDialog = ({
  open,
  handleClose,
  handleClickOpen,
  item,
  updateItem,
}) => {
  const [localText, setLocalText] = useState("");

  return (
    <>
      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateItem(item.id, localText)}>Save</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
