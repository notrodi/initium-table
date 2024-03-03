import { NgModule } from '@angular/core';
import { MainTableComponent } from './main-table.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [
    MainTableComponent
  ],
  exports: [
    MainTableComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ]
})
export class MainTableModule { }
