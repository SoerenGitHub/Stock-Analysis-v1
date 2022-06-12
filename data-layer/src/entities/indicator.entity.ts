import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IndicatorEntity {
  @PrimaryGeneratedColumn()
  id: number;
}