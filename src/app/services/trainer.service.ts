import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { Trainer } from '../common/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = 'http://localhost:8080/api/trainers'

  constructor(private httpClient:HttpClient) {
    
   }
   getTrainersList():Observable<Trainer[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.trainerCategory)
    )
   }
}

interface GetResponse {
  _embedded:{
    trainerCategory:Trainer[]
  }
}
