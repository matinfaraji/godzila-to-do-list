import axios from 'axios';
import { Task } from '../store/features/taskSlice';

const API_URL = 'http://localhost:4000/users/tasks';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (task: Task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTask = async (task: Task) => {
  const response = await axios.put(`${API_URL}/${task.id}`, task);
  return response.data;
};
