import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTableModule } from './modules/main-table/main-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from './modules/dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    MainTableModule,
    DialogModule
  ]
})
export class AppModule { }
