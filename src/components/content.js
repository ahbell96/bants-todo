import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { UpdateDialog } from "./updateDialog";

export const Content = ({
  data,
  setData,
  openUpdateDialog,
  handleClose,
  handleClickOpen,
  updateItem,
  removeItem,
}) => {
  const [itemToUpdate, setItemToUpdate] = useState({});
  return (
    <Box>
      <Box>
        <Typography variant="h3">Andrew's Todo</Typography>
      </Box>
      <Box>
        {data.length > 0 &&
          data.map((item, index) => (
            <>
              <Box key={index}>
                <Typography>{item.text}</Typography>
                <Button
                  onClick={() => {
                    setItemToUpdate(item);
                    handleClickOpen();
                  }}
                >
                  Update
                </Button>
                <Button onClick={() => removeItem(item)}>Delete</Button>
              </Box>
            </>
          ))}
        <UpdateDialog
          open={openUpdateDialog}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          updateItem={updateItem}
          item={itemToUpdate}
        />
      </Box>
    </Box>
  );
};
