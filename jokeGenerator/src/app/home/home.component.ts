import { Component, OnInit } from '@angular/core';
import { OtherJokesService } from '../services/other-jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  JOD: any;

  constructor(private jokeOfDay: OtherJokesService) { }

  // getJokeOfDay(){
  //   this.jokeOfDay.JOD().subscribe(response=> console.log(response));
  // }

  getJoke(){
    this.jokeOfDay.randomJokes().subscribe(response=>this.JOD = response);
    this.jokeOfDay.randomJokes().subscribe(response=>console.log(response));
  }

  ngOnInit() {
  }

}
