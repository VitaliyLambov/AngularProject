import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit 
{
  constructor(public gameService: GameService) { }

  ngOnInit() 
  {

    this.resetForm();
  }

  onSubmit(gameForm: NgForm) 
  {
    if (gameForm.value.$key == null)
      this.gameService.insertGame(gameForm.value);
    else
      this.gameService.updateGame(gameForm.value);
    this.resetForm(gameForm);
  }

  resetForm(gameForm?: NgForm) 
  {
    if (gameForm != null)
      gameForm.reset();
    this.gameService.selectedGame = {
      $key: null,
      name: '',
      description: '',
      salary: 0,
    }
  }
}
