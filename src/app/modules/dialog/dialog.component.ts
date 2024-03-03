import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'app/shared/services/dialog.service';
import { ClientsRemovalService } from '../clients/services/clients-removal.service';

@Component({
  selector: 'it-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: { class: 'dialog' },
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  get selectedClients(): number[] {
    return this._clientsRemoval.getSelectedClients();
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
