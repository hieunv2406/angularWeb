import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {
  colours = [10, 25, 50, 100];
  constructor() { }

  ngOnInit(): void {
  }

    addNew() {

    }
}
