import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { HomeformComponent } from './components/homeform/homeform.component';
import { GamemodeComponent } from './components/gamemode/gamemode.component';


const routes: Routes = [
  {
    path: '',
    component: HomeformComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'board/:jugador',
    component: BoardComponent
  },
  {
    path: 'gamemode/:jugador',
    component: GamemodeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
