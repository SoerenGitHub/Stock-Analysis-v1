import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent implements OnInit {

  public isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onToggle() {
    this.isHidden = !this.isHidden;
  }

}
