import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSearchComponent } from 'src/app/pages/page-search/page-search.component';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  @ViewChild('searchPage')
  private searchPage?: PageSearchComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(search: string) {
    this.searchPage?.search(search);
  }
}
