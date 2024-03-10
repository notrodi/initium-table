import { IClient } from '@interfaces';
import { filterType } from 'app/modules/main-table/interfaces';

const keys = {
  [filterType.NAME]: 'name',
  [filterType.EMAIL]: 'email',
  [filterType.PHONE]: 'phone'
}

export function sortClientsByFilter(clients: IClient[], type: filterType): IClient[] {
  const key = keys[type];
  const sortedClients = clients.sort((client1, client2) => (client1 as any)[key].toLowerCase() > (client2 as any)[key].toLowerCase() ? 1 : -1);

  return sortedClients;
}
