import express from 'express';
import bodyParser from 'body-parser';

import {ENV} from "./config/env.js";


import cors from 'cors';
// import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
// app.use(cors(CORS_OPTIONS));

app.get('/api/health', (req, res) => {
  res.status(200).send('API is healthy');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];
// const CORS_OPTIONS = {
//   origin: function (origin, callback) {
//     if (!origin || ALLOWED_ORIGINS.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   optionsSuccessStatus: 200,
// };