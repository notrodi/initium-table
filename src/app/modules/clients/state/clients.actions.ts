import { IClient } from '@interfaces';

export namespace ClientsActions {
  export class GetClients {
    static readonly type = '[Clients] Get Clients';
  }

  export class GetClientsSuccess {
    static readonly type = '[Clients] Get Clients: success';
    constructor( public readonly payload: IClient[] ) { }
  }

  export class AddNewClient {
    static readonly type = '[Clients] Add New Client';
    constructor( public readonly payload: IClient ) { }
  }

  export class RemoveClients {
    static readonly type = '[Clients] Remove Clients';
    constructor( public readonly payload: number[] ) { }
  }
}
