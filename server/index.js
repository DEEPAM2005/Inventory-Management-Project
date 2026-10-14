import express from 'express';
import cors from 'cors';
import { use } from 'react';

const app = express();
app.use(cors());
app.use(express.json());