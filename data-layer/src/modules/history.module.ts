import { HistoryController } from './../controllers/history.controller';
import { HistoryService } from './../providers/history.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [
        HistoryController,],
    providers: [
        HistoryService
    ],
})
export class HistoryModule { }
