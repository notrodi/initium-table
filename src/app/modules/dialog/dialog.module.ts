import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DialogModule { }
