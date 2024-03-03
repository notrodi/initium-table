import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IClient } from '@interfaces';
import { ClientsActions } from './clients.actions';
import { ClientsApiService } from '../services/clients-api.service';
import { map, tap } from 'rxjs';
import { mapClientsDtoToEntity, removeClients } from '../functions';

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
  @Selector()
  static clients(state: IClientsState): IClient[] {
    return state.clients;
  }

  constructor( private readonly _api: ClientsApiService ) { }

  @Action(ClientsActions.GetClients)
  getClients(ctx: StateContext<IClientsState>) {
    return this._api.getClients()
      .pipe(
        map(mapClientsDtoToEntity),
        tap(response => ctx.dispatch(new ClientsActions.GetClientsSuccess(response)))
      );
  }

  @Action(ClientsActions.GetClientsSuccess)
  getClientsSuccess(ctx: StateContext<IClientsState>, { payload }: ClientsActions.GetClientsSuccess) {
    ctx.patchState({ clients: payload });
  }

  @Action(ClientsActions.RemoveClients)
  removeClients(ctx: StateContext<IClientsState>, { payload }: ClientsActions.RemoveClients) {
    const { clients } = ctx.getState();

    ctx.patchState({ clients: removeClients(clients, payload) });
  }
}
