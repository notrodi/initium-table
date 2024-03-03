import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ClientsActions } from '../state/clients.actions';
import { ClientsState } from '../state/clients.state';
import { Observable } from 'rxjs';
import { IClient } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientsRemovalService {
  selectedClients: number[] = [];

  @Select(ClientsState.clients) clients$: Observable<IClient[]>;
  
  constructor ( private readonly _store: Store ) { }

  getSelectedClients(): number[] {
    return this.selectedClients;
  }
  
  public selectClient(index: number): void {
    if(this.selectedClients.includes(index)) {
      this.selectedClients.splice(this.selectedClients.indexOf(index), 1);
      return;
    }

    this.selectedClients.push(index);
  }

  public selectAllClients(): void {
    const clientsCount = this._store.selectSnapshot(ClientsState.clients).length;

    if (this.selectedClients.length) {
      this.selectedClients.splice(0, this.selectedClients.length);
    } else {
      for(let i = 0; i < clientsCount; i++) {
        this.selectedClients.push(i);
      }
    }
  }

  public removeClients(clientsIndex: number[]) {
    this._store.dispatch(new ClientsActions.RemoveClients(clientsIndex));
    this.selectedClients = [];
  }
}
