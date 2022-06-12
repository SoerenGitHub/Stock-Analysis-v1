import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: number;

  @Column()
  open: number;

  @Column()
  close: number;

  @Column()
  highest: number;

  @Column()
  lowest: number;
}