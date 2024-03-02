import { Component } from '@angular/core';
import { DialogService } from './shared/services/dialog.service';

@Component({
  selector: 'it-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'Клиенты';

  get isShowDialog() {
    return this._dialog.isShowDialog;
  }

  constructor ( private readonly _dialog: DialogService ) { }
}
