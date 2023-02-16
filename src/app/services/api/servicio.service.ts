import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient: HttpClient) { }
  url = "https://api.sampleapis.com/codingresources/codingResources";

  /*getCursos(){
    return this.httpClient.get(this.url);
  }*/
}
