import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gamemode',
  templateUrl: './gamemode.component.html',
  styleUrls: ['./gamemode.component.scss']
})
export class GamemodeComponent implements OnInit {

  player: string;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.player = params.jugador;
      }
    );
    console.log(this.player);
  }

}
