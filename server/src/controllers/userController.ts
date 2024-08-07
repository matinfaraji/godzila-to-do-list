import { Request, Response } from "express";
import TasksModel from "../models/tasks.model";

export const getUsers = async (req: Request, res: Response) => {
  res.send("hello world");
};

export const createUser = async (req: Request, res: Response) => {
  res.send("user created");
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await TasksModel.find({});
    res.json(result);
  } catch (error) {
    res.status(500).json("error");
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const result = await TasksModel.create({ ...data });
    res.json(result);
  } catch (error) {
    res.status(500).json("error");
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskId = req.params.taskId; 
    const deletedTask = await TasksModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).json("error");
  }
};
