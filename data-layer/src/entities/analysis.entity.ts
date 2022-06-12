import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { IndicatorEntity } from './indicator.entity';

@Entity()
export class AnalysisEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => IndicatorEntity, indicator => indicator.id)
  indicators: IndicatorEntity[];
}