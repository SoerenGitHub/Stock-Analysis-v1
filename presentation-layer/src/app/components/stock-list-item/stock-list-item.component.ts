import { Component, Input, OnInit } from '@angular/core';
import { StockEntity } from 'src/globals/models/stock.entity';

@Component({
  selector: 'app-stock-list-item',
  templateUrl: './stock-list-item.component.html',
  styleUrls: ['./stock-list-item.component.scss']
})
export class StockListItemComponent implements OnInit {

  @Input()
  stock?: StockEntity;

  constructor() { }

  ngOnInit(): void {
  }

}
