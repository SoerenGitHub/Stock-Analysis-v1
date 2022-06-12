/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { StockController } from 'src/controllers/stock.controller';
import { StockService } from 'src/providers/stock.service';

@Module({
    imports: [],
    controllers: [StockController],
    providers: [StockService],
})
export class StockModule {}
