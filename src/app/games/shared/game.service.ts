import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService 
{
  gameList: AngularFireList<any>;
  selectedGame: Game = new Game();
  constructor(private firebase :AngularFireDatabase ) { }

  getData()
  {
    this.gameList = this.firebase.list('games');
    return this.gameList;
  }

  insertGame( game : Game )
  {
    this.gameList.push({
      name: game.name,
      description: game.description,
      salary: game.salary
    });
  }

  updateGame(game : Game)
  {
    this.gameList.update(game.$key,
      {
        name: game.name,
        description: game.description,
        salary: game.salary
      });
  }

  deleteGame($key : string)
  {
    this.gameList.remove($key);
  }
}
