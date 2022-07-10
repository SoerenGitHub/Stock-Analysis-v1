import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './components/textbox/textbox.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveControlDirective } from './directives/reactive-control.directive';



@NgModule({
  declarations: [
    TextboxComponent,
    ReactiveControlDirective
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    TextboxComponent,
    ReactiveControlDirective
  ]
})
export class UiControlsModule { }
