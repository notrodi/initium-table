import { Component, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'it-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: { class: 'dialog' },
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  constructor (public readonly _dialog: DialogService) { }

  public onClose(): void {
    this._dialog.close();
  }
}
