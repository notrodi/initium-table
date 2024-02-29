import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTableModule } from './modules/main-table.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MainTableModule
  ]
})
export class AppModule { }
