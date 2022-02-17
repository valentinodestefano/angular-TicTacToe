import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 4em !important; color: #002a9c; border: none; border-radius: 42px; background: linear-gradient(145deg, #e6e6e6, #ffffff); box-shadow:  16px 16px 33px #cfcfcf, -16px -16px 33px #ffffff; font-weight: bold;}']
})
export class SquareComponent{

  @Input() value: 'X' | 'O';
  
}
