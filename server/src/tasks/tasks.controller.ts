import { Repository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

import { AppDataSource } from '../../config/database';
import { Task } from './tasks.entity';

export class TaskController {
  private taskRepository: Repository<Task>;

  constructor() {
    this.taskRepository = AppDataSource.getRepository(Task);
  }

  public async getAll(): Promise<Task[] | never> {
    let tasks: Task[] = [];

    try {
      tasks = await this.taskRepository.find({ order: { date: 'ASC' } });

      return instanceToPlain(tasks) as Task[];
    } catch (_) {
      throw new Error("Can't fetch tasks");
    }
  }
}
