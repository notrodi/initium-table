import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTableModule } from './modules/main-table/main-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from './modules/dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ClientsState } from './modules/clients/state/clients.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([ClientsState]),
    MainTableModule,
    DialogModule
  ]
})
export class AppModule { }
