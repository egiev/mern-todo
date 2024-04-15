import { DataSource } from 'typeorm';
import { Task } from '../src/tasks/tasks.entity';

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT!,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  // For production set synchronize to false and create a migration file
  synchronize: true,
  entities: [Task],
});
