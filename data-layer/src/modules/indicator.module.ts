import { IndicatorService } from './../providers/indicator.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { IndicatorController } from 'src/controllers/indicator.controller';

@Module({
    imports: [],
    controllers: [
        IndicatorController
    ],
    providers: [
        IndicatorService
    ],
})
export class IndicatorModule { }
