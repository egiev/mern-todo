import { Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';

import { TaskController } from './tasks.controller';
import { createValidator } from './tasks.validator';

export const tasksRouter: Router = Router();

tasksRouter.get('/', async (_: Request, response: Response) => {
  const taskController = new TaskController();
  const tasks = await taskController.getAll();

  response.json(tasks).status(200);
});

tasksRouter.post(
  '/',
  createValidator,
  // @ts-expect-error hello world test
  async (request: Request, response: Response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    response.send([]);
  },
);
