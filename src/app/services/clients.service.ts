import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Clients } from '../common/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl = "http://localhost:8080/api/clients";

  constructor(
    private httpClient : HttpClient
  ) { }

  getClientsList():Observable<Clients[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.clients)
    )
  }
}

interface GetResponse {
  _embedded:{
    clients:Clients[]
  }
}
