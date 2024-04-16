import { Request, Response } from 'express';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validationResult } from 'express-validator';

import { AppDataSource } from '../../config/database';
import { Task } from './tasks.entity';

class TaskController {
  public async getAll(
    _request: Request,
    response: Response,
  ): Promise<Response> {
    let tasks: Task[] = [];

    try {
      tasks = await AppDataSource.getRepository(Task).find({
        order: { date: 'ASC' },
      });
      tasks = instanceToPlain(tasks) as Task[];

      return response.json(tasks).status(200);
    } catch (_errors) {
      return response.json({ error: 'Internal Server Error' }).status(500);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const newTask = new Task();
    newTask.title = request.body.title;
    newTask.description = request.body.description;
    newTask.date = request.body.date;
    newTask.priority = request.body.priority;
    newTask.status = request.body.status;

    let createdTask: Task;

    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);
      createdTask = instanceToPlain(createdTask) as Task;

      return response.json(createdTask).status(200);
    } catch (_error) {
      return response.json({ error: 'Internal Server Error' }).status(500);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, description, date, priority, status } = request.body;

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOne({
        where: { id },
      });
    } catch (_) {
      return response.json({ error: 'Internal Server Error' }).status(500);
    }

    if (!task) {
      return response.json('The task with given ID does not exist').status(400);
    }

    try {
      await AppDataSource.getRepository(Task).update(
        id,
        plainToInstance(Task, {
          title: title || task.title,
          description: description || task.description,
          date: date || task.date,
          priority: priority || task.priority,
          status: status || task.status,
        }),
      );

      const updatedTask = await AppDataSource.getRepository(Task).findOne({
        where: { id },
      });

      return response.json(updatedTask).status(200);
    } catch (_) {
      return response.json({ error: 'Internal Server Error' }).status(500);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const task = await AppDataSource.getRepository(Task).findOne({
        where: { id },
      });

      if (!task) {
        return response.json({ error: 'Internal Server Error' }).status(500);
      }

      await AppDataSource.getRepository(Task).delete(id);

      return response.json('Task successfully deleted').status(200);
    } catch (_) {
      return response.json('Internal Server Error').status(500);
    }
  }
}

export const taskController = new TaskController();
