import { Component, OnInit } from '@angular/core';
import { GameService } from './shared/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
