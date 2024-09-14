import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import SimpleDialogDemo from "./createTask";
import { useAppDispatch, useAppSelector } from "./store/store";
import { deleteTaskAsync } from "./store/features/taskSlice";

const Cards = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks); // Correct hook name
  const dispatch = useAppDispatch(); // Correct hook name

  const handleDelete = (_id: number) => {
    dispatch(deleteTaskAsync(_id));
  };

  return (
    <div>
      <p>All tasks ({tasks.length} tasks)</p>
      <div className="flex justify-between gap-8">
        <div className="mt-[15px]">
          <ViewHeadlineOutlinedIcon />
          <ViewComfyIcon />
        </div>
        <Autocomplete
          id="task-filter"
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter tasks" />
          )}
          options={tasks.map((task) => task.title)}
          disableCloseOnSelect
        />
      </div>
      <div className="flex gap-7 px-10">
        {tasks.map((task) => (
          <Card key={task._id} sx={{ width: "15rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {task.title}
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.secondary">
                {task.description}
              </Typography>
              <Typography color="text.secondary">{task.date}</Typography>
            </CardContent>
            <hr />
            <CardActions>
              <Button size="small">Completed</Button>
              <IconButton onClick={() => handleDelete(task._id)}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton>
                <StarOutlineOutlinedIcon
                  sx={{ color: task.important ? "red" : "darkgray" }}
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
        <div className="my-auto">
          <SimpleDialogDemo />
        </div>
      </div>
    </div>
  );
};

export default Cards;
