import { Component, OnInit } from '@angular/core';
import { ChuckJokesService } from '../services/chuck-jokes.service';

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.scss']
})
export class ChuckJokesComponent implements OnInit {

  Random: any;

  constructor(private chuckJokes: ChuckJokesService) { }

  getChuckJoke(){
    this.chuckJokes.getChuckJoke().subscribe(response=> this.Random = response);
    this.chuckJokes.getChuckJoke().subscribe(response=>console.log(response));
  }

  ngOnInit() {
  }

}
