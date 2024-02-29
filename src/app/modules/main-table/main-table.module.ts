import { NgModule } from '@angular/core';
import { MainTableComponent } from './main-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainTableComponent
  ],
  exports: [
    MainTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainTableModule { }
