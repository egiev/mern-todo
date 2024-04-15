import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Priority } from '../enums/priority.enum';
import { Status } from '../enums/status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  date: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: Priority, default: Priority.normal })
  priority: Priority;

  @Column({ type: 'enum', enum: Status, default: Status.todo })
  status: Status;
}
