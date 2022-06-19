import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { chart } from 'src/globals/enums/chart.enum';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit {

  @Input()
  public title?: string;

  @Input()
  public text?: string;

  @Output()
  clickAction = new EventEmitter<void>();

  chartType = chart.line;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickAction.emit();
  }

}
