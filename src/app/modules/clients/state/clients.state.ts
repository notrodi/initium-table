import { Injectable } from '@angular/core';
import { IClient } from '@interfaces/client.interface';
import { Action, State, StateContext } from '@ngxs/store';
import { ClientsActions } from './clients.actions';
import { ClientsApiService } from '../services/clients-api.service';
import { tap } from 'rxjs';

interface IClientsState {
  clients: IClient[];
}

const CLIENTS_STATE_DEFAULT: IClientsState = {
  clients: []
}

@State<IClientsState>({
  name: 'clients',
  defaults: CLIENTS_STATE_DEFAULT
})
@Injectable()
export class ClientsState {

  constructor( private readonly _api: ClientsApiService ) { }

  @Action(ClientsActions.GetClients)
  getClients(ctx: StateContext<IClientsState>) {
    return this._api.getClients()
      .pipe(
        tap(response => ctx.dispatch(new ClientsActions.GetClientsSuccess(response)))
      );
  }

  @Action(ClientsActions.GetClientsSuccess)
  getClientsSuccess(ctx: StateContext<IClientsState>, { payload }: ClientsActions.GetClientsSuccess) {
    ctx.patchState({ clients: payload });
  }
}
