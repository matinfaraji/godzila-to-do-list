import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  status: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const task = state.tasks.find((task) => task.id === updatedTask.id);
      if (task) {
        task.title = updatedTask.title;
        task.date = updatedTask.date;
        task.description = updatedTask.description;
        task.directory = updatedTask.directory;
        task.important = updatedTask.important;
        task.status = updatedTask.status;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
