
export interface Task {
  _id: number;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  status: boolean;
}



import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks, createTask, deleteTaskApi } from "../../api/taskApi";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasksAsync = createAsyncThunk<Task[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await fetchTasks();
    return response;
  }
);

export const createTaskAsync = createAsyncThunk<Task, Omit<Task, 'id'>>(
  "tasks/createTask",
  async (taskData) => {
    const response = await createTask(taskData);
    return response;
  }
);

export const deleteTaskAsync = createAsyncThunk<string, string>(
  "tasks/deleteTask",
  async (taskId) => {
    await deleteTaskApi(taskId);
    return taskId;
  }
);

const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task._id.toString() !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task._id === updatedTask._id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask; 
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(createTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTaskAsync.fulfilled, (state, action: PayloadAction<Task>) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create task";
      })
      .addCase(deleteTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.tasks = state.tasks.filter(task => task._id.toString() !== action.payload);
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete task";
      });
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
