import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  @Output()
  searchAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
