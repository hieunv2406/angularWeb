// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-plugins',
//   templateUrl: './plugins.component.html',
//   styleUrls: ['./plugins.component.scss']
// })
// export class PluginsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'consumer', 'created'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  addNew() {
  }
}

export interface PeriodicElement {
  name: string;
  consumer: number;
  created: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', consumer: 1.0079, created: new Date()},
];
