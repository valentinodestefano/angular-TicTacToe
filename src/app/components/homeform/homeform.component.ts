import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.scss']
})
export class HomeformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(val){
    const userName = val.username;
    console.warn(userName);
    this.router.navigate(['/gamemode', userName]);
  }

}
