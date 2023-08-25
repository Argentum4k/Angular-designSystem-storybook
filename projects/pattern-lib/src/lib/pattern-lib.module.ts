import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { CommonModule } from '@angular/common';
import ButtonComponent from './button/button.component';


@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonComponent
  ],
    imports: [
      CommonModule
    ],
  exports: [
    PatternLibComponent,
    ButtonComponent // чтобы тут работало надо добавить в public-api.ts тоже
  //   это вроде как чтобы отдельную кнопку вытаскивать а не все компоненты
  ]
})
export class PatternLibModule { }
