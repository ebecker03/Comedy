import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckJokesService {

  constructor(private http: HttpClient) { }

  getChuckJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }

}
