import { IndicatorModule } from './modules/indicator.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppRoutingModule } from './app.routing.module';
import { StockModule } from './modules/stock.module';
import { AnalysisModule } from './modules/analysis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryModule } from './modules/history.module';

@Module({
  imports: [
    IndicatorModule, 
    AnalysisModule, 
    StockModule, 
    HistoryModule,
    AppRoutingModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql' | 'mariadb',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: true,
    }),
  ]
})
export class AppModule { }
