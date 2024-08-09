import mongoose from 'mongoose';
import 'dotenv/config'; // This loads environment variables from a .env file into process.env

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://udarasahanj:81795926@cluster0.vuowusk.mongodb.net/to-do-list').then(()=>console.log("Database Connected"))
}
