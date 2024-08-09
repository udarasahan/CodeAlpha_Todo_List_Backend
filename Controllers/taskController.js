//import { title } from "process";
import taskModel from "../Models/taskModel.js";
import fs from 'fs';

// Add task
import Task from '../Models/taskModel.js';

const addTask = async (req, res) => {
  console.log(req.body); // Log the request body to verify the data

  const { title, description, date, time } = req.body;

  try {
    const newTask = new taskModel({ title, description, date, time });
    await newTask.save();
    res.status(201).json({ success: true, message: 'Task added successfully' });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(400).json({ success: false, message: 'Failed to add task', error });
  }
};
  

// all task list
const listTask = async (req,res) => {
    try {
        const tasks = await taskModel.find({});
        res.json({success:true,data:tasks})
    } catch (error) {
        console.log(error);
        res.join({success:false,message:"Error"})
    }
}

const removeTask = async (req,res) => {
    try {
        await taskModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Task Deleted"})
    } catch (error) {
        console.log(error);
        res.loin({success:false,message:"Error"})
    }
}

export {addTask, listTask, removeTask}