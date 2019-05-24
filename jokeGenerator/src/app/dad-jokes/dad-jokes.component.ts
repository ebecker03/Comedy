import { Component, OnInit } from '@angular/core';
import { DadJokesService } from '../services/dad-jokes.service';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss']
})
export class DadJokesComponent implements OnInit {

  search: any;

  constructor(private dadJoke: DadJokesService) { }

  getJoke(){
    this.dadJoke.getRandomDadJoke().subscribe(response=> this.search = response);
    this.dadJoke.getRandomDadJoke().subscribe(response=> console.log(response));
  }

  ngOnInit() {
  }

}
