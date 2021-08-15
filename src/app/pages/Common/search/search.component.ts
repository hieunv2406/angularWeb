import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  colours = [10, 25, 50, 100];
  constructor() { }

  ngOnInit(): void {
  }

}
