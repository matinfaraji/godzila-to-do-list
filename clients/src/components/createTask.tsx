import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose("submit");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Enter Details</DialogTitle>
      <div style={{ padding: "20px" }}>
        <TextField label="Input 1" fullWidth margin="normal" />
        <TextField label="Input 2" fullWidth margin="normal" />
        <TextField
          label="Choose a date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel control={<Checkbox />} label="important" />
        <FormControlLabel control={<Checkbox />} label="status" />
        <Button variant="contained" color="primary" onClick={handleClose}>
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
