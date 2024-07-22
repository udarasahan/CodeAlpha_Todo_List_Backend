import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://udarasahanj:81795926@cluster0.vuowusk.mongodb.net/backend').then(()=>console.log("Database Connented"));
}