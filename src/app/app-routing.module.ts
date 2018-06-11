import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameComponent } from './games/game/game.component';

const appRoutes: Routes = [
    {path: '', redirectTo: "/register", pathMatch: "full"},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}