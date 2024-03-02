import { Component, ViewEncapsulation } from '@angular/core';
import { IClient } from '@interfaces/client.interface';
import { CLIENTS } from '@mocks/clients.mock';
import { Store } from '@ngxs/store';
import { DialogService } from 'app/shared/services/dialog.service';
import { ClientsActions } from '../clients/state/clients.actions';

@Component({
  selector: 'it-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
  host: { class: 'main-table' },
  encapsulation: ViewEncapsulation.None
})
export class MainTableComponent {
  readonly clients = CLIENTS;
  // readonly clients: IClient[] = [];
  
  constructor (
    private readonly _dialog: DialogService,
    private readonly _store: Store
  ) { }

  ngOnInit() {
    this._store.dispatch(new ClientsActions.GetClients);
  }

  public onClickAdd() {
    this._dialog.show();
  }
}
