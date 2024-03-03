import { Component, ViewEncapsulation } from '@angular/core';
import { IClient } from '@interfaces';
import { CLIENTS } from '@mocks';
import { Select, Store } from '@ngxs/store';
import { DialogService } from 'app/modules/dialog/services/dialog.service';
import { ClientsActions } from '../clients/state/clients.actions';
import { ClientsState } from '../clients/state/clients.state';
import { Observable } from 'rxjs';
import { ClientsRemovalService } from '../clients/services/clients-removal.service';
import { dialogType } from '../dialog/models/dialog-type.enum';

@Component({
  selector: 'it-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
  host: { class: 'main-table' },
  encapsulation: ViewEncapsulation.None
})
export class MainTableComponent {
  // readonly clients = CLIENTS;
  // readonly clients: IClient[] = [];

  readonly dialogType = dialogType;
  selectClient = this._clientsRemoval.selectClient;
  selectAllClients = this._clientsRemoval.selectAllClients;

  @Select(ClientsState.clients) clients$: Observable<IClient[]>;

  get isShowDialog(): boolean {
    return this._dialog.isShowDialog;
  }

  get selectedClients(): number[] {
    return this._clientsRemoval.getSelectedClients();
  }
  
  constructor (
    private readonly _dialog: DialogService,
    private readonly _clientsRemoval: ClientsRemovalService,
    private readonly _store: Store
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new ClientsActions.GetClients);
  }

  public dialogShow(type: dialogType): void {
    this._dialog.show(type);
  }

  public confirm() {
    this._clientsRemoval.removeClients(this.selectedClients);
  }
}
