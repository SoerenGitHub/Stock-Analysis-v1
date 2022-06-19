import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './app-shell/topmenu/topmenu.component';
import { SidemenuComponent } from './app-shell/sidemenu/sidemenu.component';
import { AppShellComponent } from './app-shell/app-shell/app-shell.component';
import { SidemenuItemComponent } from './app-shell/sidemenu-item/sidemenu-item.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { UsermenuComponent } from './app-shell/usermenu/usermenu.component';
import { BreadcrumbComponent } from './app-shell/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { TopmenuItemComponent } from './app-shell/topmenu-item/topmenu-item.component';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    SidemenuComponent,
    AppShellComponent,
    SidemenuItemComponent,
    TextboxComponent,
    UsermenuComponent,
    BreadcrumbComponent,
    TopmenuItemComponent,
    StockInfoComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
