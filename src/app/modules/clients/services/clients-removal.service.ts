import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ClientsActions } from '../state/clients.actions';

@Injectable({
  providedIn: 'root'
})
export class ClientsRemovalService {
  selectedClients: number[] = [];
  
  constructor ( private readonly _store: Store ) { }

  getSelectedClients(): number[] {
    return this.selectedClients;
  }
  
  public selectClient(index: number): void {
    this.selectedClients.push(index);
  }

  public removeClients(clientsIndex: number[]) {
    this._store.dispatch(new ClientsActions.RemoveClients(clientsIndex));
    this.selectedClients = [];
  }
}
