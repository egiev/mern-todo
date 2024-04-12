import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
dotenv.config();

const port = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
  console.log(request);
  response.send('Hello world');
});

app.listen(port);
