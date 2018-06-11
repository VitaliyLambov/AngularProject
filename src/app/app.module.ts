import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: "AIzaSyAAd2kJi7oGmicOC_-loqHvq1bomaIbs50",
  authDomain: "vitaliyproject-41bb7.firebaseapp.com",
  databaseURL: "https://vitaliyproject-41bb7.firebaseio.com",
  projectId: "vitaliyproject-41bb7",
  storageBucket: "vitaliyproject-41bb7.appspot.com",
  messagingSenderId: "147701162984"
}

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    GameListComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( firebaseConfig ),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
