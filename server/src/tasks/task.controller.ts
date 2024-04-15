import { instanceToPlain } from 'class-transformer';
import { AppDataSource } from '../../config/database';
import { Task } from './tasks.entity';

export class TaskController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  public async getAll(): Promise<Task[] | never> {
    let tasks: Task[] = [];

    try {
      tasks = await this.taskRepository.find({ order: { date: 'ASC' } });

      return instanceToPlain(tasks) as Task[];
    } catch (error) {
      throw new Error("Can't fetch tasks");
    }
  }
}
