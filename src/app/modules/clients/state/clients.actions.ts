import { IClient } from '@interfaces';

export namespace ClientsActions {
  export class GetClients {
    static readonly type = '[Clients] Get Clients';
  }

  export class GetClientsSuccess {
    static readonly type = '[Clients] Get Clients: success';
    constructor( public readonly payload: IClient[] ) { }
  }
}