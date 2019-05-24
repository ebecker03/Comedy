import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadJokesService {
  httpOptions: Object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders ({
        'accept': 'application/json',
      })
    }
   }

  getRandomDadJoke(){

    return this.http.get('https://icanhazdadjoke.com/', this.httpOptions)

  }
}
