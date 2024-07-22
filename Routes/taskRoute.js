import express from "express";
import { addTask,listTask,removeTask } from "../Controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/add",addTask);
taskRouter.get("/list",listTask);
taskRouter.post("/remove",removeTask);


export default taskRouter;
