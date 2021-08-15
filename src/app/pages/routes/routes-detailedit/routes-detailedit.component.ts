// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-routes-detailedit',
//   templateUrl: './routes-detailedit.component.html',
//   styleUrls: ['./routes-detailedit.component.scss']
// })
// export class RoutesDetaileditComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatAutocomplete} from '@angular/material/autocomplete';

@Component({
  selector: 'app-routes-detailedit',
  templateUrl: './routes-detailedit.component.html',
  styleUrls: ['./routes-detailedit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoutesDetaileditComponent implements OnInit {
  visible = true;
  selectedValue: string;
  headers: string[] = ['Lemon'];
  menu: string[] = ['Route details', 'Plugins', 'Eligible Consumers'];
  @ViewChild('headerInput') headerInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeModel($event: any) {
  }

  close() {
  }
}

