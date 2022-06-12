/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HistoryService } from 'src/providers/history.service';

@Controller()
export class HistoryController {
    constructor(private readonly historyService: HistoryService) { }

    @Get()
    async findAll(@Param() params): Promise<any> {

        const d = new Date();
        d.setFullYear(d.getFullYear() - 2);

        return await firstValueFrom(this.historyService.getAll(params.symbol, d, new Date()));
    }
}
