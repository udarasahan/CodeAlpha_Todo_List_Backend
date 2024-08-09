import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import taskRouter from './Routes/taskRoute.js';
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// api endpoints
app.use('/api/task', taskRouter);


app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
