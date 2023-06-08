import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../backend/config/db.js';

dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
connectDB();
