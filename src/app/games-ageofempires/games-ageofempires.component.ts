import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-games-ageofempires',
  templateUrl: './games-ageofempires.component.html',
  styleUrls: ['../games/games.component.css']
})
export class GamesAgeofempiresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['aoe']);
  }

}
