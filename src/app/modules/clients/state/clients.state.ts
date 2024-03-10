import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IClient } from '@interfaces';
import { ClientsActions } from './clients.actions';
import { ClientsApiService } from '../services/clients-api.service';
import { map, tap } from 'rxjs';
import { mapClientsDtoToEntity, removeClients } from '../functions';
import { sortClientsByFilter } from './functions';

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
    const clients = localStorage.getItem('clients');

    // if (clients) {
    //   ctx.dispatch(new ClientsActions.GetClientsSuccess(JSON.parse(clients)))
    //   return;
    // }

    return this._api.getClients()
      .pipe(
        map(mapClientsDtoToEntity),
        tap(response => ctx.dispatch(new ClientsActions.GetClientsSuccess(response)))
      );
  }

  @Action(ClientsActions.GetClientsSuccess)
  getClientsSuccess(ctx: StateContext<IClientsState>, { payload }: ClientsActions.GetClientsSuccess) {
    localStorage.setItem('clients', JSON.stringify(payload));
    ctx.patchState({ clients: payload });
  }
  
  @Action(ClientsActions.AddNewClient)
  addNewClient(ctx: StateContext<IClientsState>, { payload }: ClientsActions.AddNewClient) {
    const { clients } = ctx.getState();
    clients.unshift(payload);

    localStorage.setItem('clients', JSON.stringify(clients));
    ctx.patchState({ clients });
  }
  
  @Action(ClientsActions.EditClient)
  editClient(ctx: StateContext<IClientsState>, { id, client }: ClientsActions.EditClient) {
    const { clients } = ctx.getState();
    clients[id] = client;

    localStorage.setItem('clients', JSON.stringify(clients));
    ctx.patchState({ clients });
  }

  @Action(ClientsActions.RemoveClients)
  removeClients(ctx: StateContext<IClientsState>, { payload }: ClientsActions.RemoveClients) {
    const { clients } = ctx.getState();
    const resultClients = removeClients(clients, payload);

    localStorage.setItem('clients', JSON.stringify(resultClients));
    ctx.patchState({ clients: resultClients });
  }

  @Action(ClientsActions.ApplyFilter)
  applyFilter(ctx: StateContext<IClientsState>, { type }: ClientsActions.ApplyFilter) {
    const { clients } = ctx.getState();
    const sortClients = sortClientsByFilter(clients, type);

    ctx.patchState({ clients: sortClients });
    localStorage.setItem('clients', JSON.stringify(sortClients));
  }
}
