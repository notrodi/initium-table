import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsApiService {
  constructor( private readonly httpClient: HttpClient ) { }

  getClients(): Observable<any> {
    return this.httpClient.get('https://test-data.directorix.cloud/task1');
  }
}
