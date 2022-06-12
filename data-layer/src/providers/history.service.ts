/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { HistoryEntity } from 'src/entities/history.entity';

@Injectable()
export class HistoryService {
    constructor(private readonly httpService: HttpService){}

    getAll(stockSymbol: string, fromDate: Date, toDate: Date) : Observable<AxiosResponse<any, any>> {
        const url = process.env.POLYGON_API_DOMAIN+'v2/aggs/ticker/' + stockSymbol + '/range/1/day/' + fromDate.toISOString().substring(0, 10) + '/' + toDate.toISOString().substring(0, 10) + '?apiKey=' + process.env.POLYGON_API_KEY;
        return this.httpService.get(url).pipe(map(response => {
            return response.data.results.map(history => ({
                open: history.o,
                close: history.c,
                highest: history.h,
                lowest: history.l,
                timestamp: history.t,
                id: history.t
            } as HistoryEntity));
        }));
    }
}
