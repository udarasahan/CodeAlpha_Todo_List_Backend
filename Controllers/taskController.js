//import { title } from "process";
import taskModel from "../Models/taskModel";
import fs from 'fs';

// Add task
const addTask = async (req,res) => {

    const task = new taskModel ({
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate,
        dueTime:req.body.dueTime
    })
    try {
        await task.save();
        res.json|({success:true,message:"Task Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }

}

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