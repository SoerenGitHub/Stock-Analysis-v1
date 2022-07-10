import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topmenu-item',
  templateUrl: './topmenu-item.component.html',
  styleUrls: ['./topmenu-item.component.scss']
})
export class TopmenuItemComponent implements OnInit {

  @Input()
  title?: string;

  @Input()
  link?: string | any[];

  @Input()
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
