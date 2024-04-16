import { Router } from 'express';

import { createValidator, updateValidator } from './tasks.validator';
import { taskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('', taskController.getAll);
tasksRouter.post('', createValidator, taskController.create);
tasksRouter.put('/:id', updateValidator, taskController.update);
tasksRouter.delete('/:id', updateValidator, taskController.delete);
