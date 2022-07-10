import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { StockInfoComponent } from './components/stock-info/stock-info.component';
import { ChartComponent } from './components/chart/chart.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockListItemComponent } from './components/stock-list-item/stock-list-item.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { UiControlsModule } from './ui/ui-controls/ui-controls.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureAppShellModule } from './feature/feature-app-shell/feature-app-shell.module';

@NgModule({
  declarations: [
    AppComponent,
    StockInfoComponent,
    ChartComponent,
    StockListComponent,
    StockListItemComponent,
    PageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,

    UiControlsModule,
    FeatureAppShellModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
