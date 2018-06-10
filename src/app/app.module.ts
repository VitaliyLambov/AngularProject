import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { GameListComponent } from './games/game-list/game-list.component'

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
