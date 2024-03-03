import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'app/shared/services/dialog.service';
import { ClientsRemovalService } from '../clients/services/clients-removal.service';
import { dialogType } from './models/dialog-type.enum';

@Component({
  selector: 'it-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: { class: 'dialog' },
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  dialogRemove = dialogType.REMOVE;
  dialogAdd = dialogType.ADD;

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  get selectedClients(): number[] {
    return this._clientsRemoval.getSelectedClients();
  }

  get dialogType(): dialogType {
    return this._dialog.getDialogType();
  }
  
  constructor (
    public readonly _dialog: DialogService,
    private readonly _clientsRemoval: ClientsRemovalService
  ) { }

  public onClose(): void {
    this._dialog.close();
  }

  public confirm(): void {
    this._dialog.close();
    this.isConfirmed.emit(true);
  }
}
