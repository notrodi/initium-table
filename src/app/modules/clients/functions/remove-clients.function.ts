import { IClient } from '@interfaces';

export function removeClients(clients: IClient[], indexes: number[]) {
  for(let i = clients.length; i >= 0; i--) {
    if(indexes.indexOf(i) != -1) {
      clients.splice(i, 1);
    }
  }

  return clients;
}
