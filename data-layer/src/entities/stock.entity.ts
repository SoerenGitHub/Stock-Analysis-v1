import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, Column, PrimaryColumn } from 'typeorm';
import { AnalysisEntity } from './analysis.entity';
import { HistoryEntity } from './history.entity';

@Entity()
export class StockEntity {
  @PrimaryColumn()
  symbol: string;

  @ManyToOne(() => AnalysisEntity, analysis => analysis.id)
  analysis: AnalysisEntity;

  @ManyToMany(() => HistoryEntity, history => history.id)
  history: HistoryEntity[];
}