import { Request, Response, Router } from 'express';
import { TaskController } from './task.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/', async (_: Request, response: Response) => {
  const taskController = new TaskController();
  const tasks = await taskController.getAll();

  response.json(tasks).status(200);
});
