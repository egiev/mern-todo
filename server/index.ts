import express, { Express, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import './config/dotenv';
import { AppDataSource } from './config/database';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (_, response: Response) => {
  response.send('Hello world');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
    console.log('Cannot connect to the data source');
  });
