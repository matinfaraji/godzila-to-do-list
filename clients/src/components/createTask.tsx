import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useAppDispatch } from "./store/store";
import { addTask } from "./store/features/taskSlice";
import { v4 as uuidv4 } from "uuid"; 

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const formData = {
      id: uuidv4(),
      title: (document.getElementById("input1") as HTMLInputElement).value,
      description: (document.getElementById("input2") as HTMLInputElement).value,
      date: (document.getElementById("date") as HTMLInputElement).value,
      directory: "", // Assuming directory is not part of the form
      important: (document.getElementById("important") as HTMLInputElement).checked,
      status: (document.getElementById("status") as HTMLInputElement).checked,
    };
    dispatch(addTask(formData));
    onClose("submit");
  };

  return (
    <Dialog onClose={() => onClose("cancel")} open={open}>
      <DialogTitle>Enter Details</DialogTitle>
      <div style={{ padding: "20px" }}>
        <TextField id="input1" label="Title" fullWidth margin="normal" />
        <TextField id="input2" label="Description" fullWidth margin="normal" />
        <TextField
          id="date"
          label="Choose a date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel
          control={<Checkbox id="important" />}
          label="Important"
        />
        <FormControlLabel control={<Checkbox id="status" />} label="Status" />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    console.log("Submitted:", value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}