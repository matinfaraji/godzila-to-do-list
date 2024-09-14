const BASE_URL = import.meta.env.VITE_API_URL;
import axios from "axios";

export interface Task {
  _id: number;
  title: string;
  date: string;
  description: string;
  directory: string;
  important: boolean;
  status: boolean;
}
interface ApiResponse {
    success: boolean;
    message?: string;
  }

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export async function createTask(taskData: Omit<Task, '_id'>): Promise<Task> {
  // Replace with your API call logic
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create task');
  }

  const createdTask: Task = await response.json();
  return createdTask;
}
export const deleteTaskApi = async (taskId: number): Promise<ApiResponse> => {
    try {
      const response = await axios.delete<ApiResponse>(`${BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error; 
    }
  };