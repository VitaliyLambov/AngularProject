import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit 
{
  gameList: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit() 
  {
    var x = this.gameService.getData();
    x.snapshotChanges().subscribe(item => {
      this.gameList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.gameList.push(y as Game);
      });
    });
  }

  onEdit(emp: Game) 
  {
    this.gameService.selectedGame = Object.assign({}, emp);
  }

  onDelete(key: string) 
  {
    if (confirm('Are you sure to delete this game?') == true) {
      this.gameService.deleteGame(key);
    }
  }
}
