import { IClient } from '@interfaces';
import { IClientsDto } from '../inrefaces';

export function mapClientsDtoToEntity(clients: IClientsDto): IClient[] {
  return clients.users;
}
