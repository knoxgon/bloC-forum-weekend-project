import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { GamesPaydayComponent } from './games-payday/games-payday.component';
import { HomeComponent } from './home/home.component';
import { GamesFarcryComponent } from './games-farcry/games-farcry.component';
import { GamesAgeofempiresComponent } from './games-ageofempires/games-ageofempires.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'games', component: GamesComponent,
    children: [
      {path: 'payday', component: GamesPaydayComponent},
      {path: 'farcry', component: GamesFarcryComponent},
      {path: 'aoe', component: GamesAgeofempiresComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    GamesPaydayComponent,
    HomeComponent,
    GamesFarcryComponent,
    GamesAgeofempiresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
