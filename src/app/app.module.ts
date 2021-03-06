import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeformComponent } from './components/homeform/homeform.component';
import { GamemodeComponent } from './components/gamemode/gamemode.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    NavbarComponent,
    AboutComponent,
    HomeformComponent,
    GamemodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
