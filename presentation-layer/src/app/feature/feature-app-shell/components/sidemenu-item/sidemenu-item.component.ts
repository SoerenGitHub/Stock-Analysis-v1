import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'li[app-sidemenu-item]',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {


  @Input()
  routerLink!: string | any[];

  @Input()
  title!: string;

  @Input()
  icon!: string;

  @Input()
  badge?: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
