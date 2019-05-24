import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtherJokesService {

  constructor(private http: HttpClient) { }

  // JOD(){
  //   return this.http.get('https://api.jokes.one/jod')
  // }

  randomJokes(){
    return this.http.get('https://sv443.net/jokeapi/category/Programming');
  }
}
