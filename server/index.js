import express from 'express';
import cors from 'cors';
import connectDB from './db/connection.js';
import authRoutes from './routes/auth.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Inventory Management Server is running!');
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
};

startServer();