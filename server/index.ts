import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import './config/dotenv';
import { AppDataSource } from './config/database';
import { tasksRouter } from './src/tasks/tasks.router';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/tasks', tasksRouter);

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
    console.log('Cannot connect to the data source');
  });
