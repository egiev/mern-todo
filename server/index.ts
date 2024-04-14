import express, { Express, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
dotenv.config();

const port = process.env.PORT;

app.get('/', (_, response: Response) => {
  response.send('Hello world');
});

app.listen(port);
