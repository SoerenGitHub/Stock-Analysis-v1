import { AnalysisService } from './../providers/analysis.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AnalysisController } from 'src/controllers/analysis.controller';

@Module({
    imports: [],
    controllers: [
        AnalysisController
    ],
    providers: [
        AnalysisService
    ],
})
export class AnalysisModule { }
