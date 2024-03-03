import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'app/modules/dialog/services/dialog.service';
import { ClientsRemovalService } from '../clients/services/clients-removal.service';
import { dialogType } from './models/dialog-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ClientsActions } from '../clients/state/clients.actions';
import { ClientsState } from '../clients/state/clients.state';

@Component({
  selector: 'it-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: { class: 'dialog' },
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  newClientForm: FormGroup;
  dialogRemove = dialogType.REMOVE;
  dialogAdd = dialogType.ADD;

  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  get selectedClients(): number[] {
    return this._clientsRemoval.getSelectedClients();
  }

  get dialogType(): dialogType {
    return this._dialog.getDialogType();
  }

  get clientIndex(): number {
    return this._dialog.editClientIndex;
  }
  
  constructor (
    public readonly _dialog: DialogService,
    private readonly _store: Store,
    private readonly _clientsRemoval: ClientsRemovalService,
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newClientForm = this._fb.group({
      name: [null],
      surname: [null],
      email: [null],
      phone: [null]
    })

    if (this.clientIndex >= 0) {
      const client = this._store.selectSnapshot(ClientsState.clients)[this.clientIndex];

      this.newClientForm.patchValue(client);
    }
  }

  public onClose(): void {
    this._dialog.close();
  }

  public confirm(): void {
    if (this.dialogType === dialogType.ADD) {
      this._store.dispatch(new ClientsActions.AddNewClient(this.newClientForm.value));
    }

    if (this.dialogType === dialogType.EDIT) {
      this._store.dispatch(new ClientsActions.EditClient(this.clientIndex, this.newClientForm.value));
      this.newClientForm.reset();
    }

    this._dialog.close();
    this.isConfirmed.emit(true);
  }
}
