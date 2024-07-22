import mongoose from 'mongoos';


const taskSchema = new mongoose.Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    dueDate: {type: Date,requred:true},
    dueTime: {type: Date,required:true}
})

const taskModel = mongoose.models.task || mongoose.model("task",taskSchema)

export default taskModel;