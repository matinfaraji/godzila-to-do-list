import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import SimpleDialogDemo from "./createTask";
// redux

export default function Cards() {
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;
  return (
    <div>
      <div>
        <p>All tasls (3tasks)</p>
        <div className="flex justify-between gap-8">
          <div className=" mt-[15px]">
            <ViewHeadlineOutlinedIcon />
            <ViewComfyIcon />
          </div>
          <Autocomplete
            id="disabled-options-demo"
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Disabled options" />
            )}
            options={[]}
          />
        </div>
        <div className=" flex gap-7 px-10">
          <Card sx={{ width: "15rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                task 1
              </Typography>
              <Typography sx={{ mb: 17 }} color="text.secondary">
                this is the description for this task
              </Typography>{" "}
              <Typography color="text.secondary">4\12\2023</Typography>
            </CardContent>
            <hr />
            <CardActions>
              <Button size="small">completed</Button>
              <DeleteOutlineOutlinedIcon />
              <StarOutlineOutlinedIcon />
            </CardActions>
          </Card>
         <div className="my-auto">
         <SimpleDialogDemo/>
         </div>
        </div>
      </div>
    </div>
  );
}
