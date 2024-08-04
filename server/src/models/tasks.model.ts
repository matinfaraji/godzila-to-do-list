import { Schema, model, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  date: Date;
  description: string;
  directory: string;
  important: boolean;
  status: boolean;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  directory: { type: String, required: true },
  important: { type: Boolean, required: true },
  status: { type: Boolean, required: true },
});

const TasksModel = model<ITask>("Tasks", TaskSchema);

export default TasksModel;
