import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SidemenuItemComponent } from './components/sidemenu-item/sidemenu-item.component';
import { UsermenuComponent } from './components/usermenu/usermenu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TopmenuItemComponent } from './components/topmenu-item/topmenu-item.component';



@NgModule({
  declarations: [
    TopmenuComponent,
    SidemenuComponent,
    AppShellComponent,
    SidemenuItemComponent,
    UsermenuComponent,
    BreadcrumbComponent,
    TopmenuItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureAppShellModule { }
