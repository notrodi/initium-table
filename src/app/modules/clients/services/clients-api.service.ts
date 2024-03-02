import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClientsDto } from '../inrefaces';

@Injectable({
  providedIn: 'root'
})
export class ClientsApiService {
  constructor( private readonly httpClient: HttpClient ) { }

  getClients(): Observable<IClientsDto> {
    return this.httpClient.get<IClientsDto>('https://test-data.directorix.cloud/task1');
  }
}
