import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, ChartConfiguration, ChartType, Decimation, DefaultDataPoint, Filler, Legend, LinearScale, LineController, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { lineChartConfig } from 'src/globals/configs/chartjs/line-chart.config';
import { chart } from 'src/globals/enums/chart.enum';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> implements AfterViewInit {
  //region ViewChilds
  @ViewChild('chart')
  public chartRef?: ElementRef<HTMLCanvasElement>;
  //endregion

  //region Input & Output
  @Input()
  type: chart = chart.line

  //endregion

  constructor() { 
    Chart.register(LineElement, LineController, CategoryScale, LinearScale, Decimation, Filler, PointElement, Legend, Title, Tooltip);
  }

  ngAfterViewInit(): void {
    const ctx = this.chartRef?.nativeElement.getContext('2d');
    const configs = this.getConfigs();

      if(ctx) {
        new Chart(ctx, configs);
      } else {
        console.error('Can not find chart context.')
      }
   
  }

  getConfigs() {
    switch(this.type) {
      case chart.line:
        return lineChartConfig;
      default:
        console.error('Can not find chart configs.');
        return lineChartConfig;
    }
  }

}
