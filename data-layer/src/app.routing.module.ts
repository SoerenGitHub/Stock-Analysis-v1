import { RouterModule } from "@nestjs/core";
import { AnalysisModule } from "./modules/analysis.module";
import { HistoryModule } from "./modules/history.module";
import { IndicatorModule } from "./modules/indicator.module";
import { StockModule } from "./modules/stock.module";

export const AppRoutingModule = RouterModule.register([
  {
    path: 'stocks',
    module: StockModule,
    children: [
      {
        path: ':symbol/history',
        module: HistoryModule
      },
      {
        path: 'analysis',
        module: AnalysisModule,
        children: [
          {
            path: 'indicator',
            module: IndicatorModule
          }
        ]
      }
    ],
  },
]);