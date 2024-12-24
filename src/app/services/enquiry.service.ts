import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Enquiry } from '../common/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  
  private baseUrl = 'http://localhost:8080/api/contact';

  constructor(private httpClient:HttpClient) { }

  getEnquiryList():Observable<Enquiry[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.contact)
    )
  }

  searchEnquiry(theKeyWord: string):Observable<Enquiry[]> {

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyWord}`
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.contact)
    )
  }


}

interface GetResponse {
  _embedded:{
    contact:Enquiry[]
  }
}
