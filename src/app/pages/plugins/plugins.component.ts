import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
  displayedColumns: string[] = ['img', 'toggle', 'eye' , 'name', 'weight', 'symbol', 'consumer', 'create', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  weight: string;
  symbol: string;
  consumer: string;
  create: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'basic-auth', weight: 'global' , symbol: 'All Entrypoints', consumer: 'All consumers', create: 'Apr 1, 2021'},
  { name: 'basic-auth', weight: 'global', symbol: 'All Entrypoints', consumer: 'All consumers', create: 'Apr 1, 2021'},
  { name: 'basic-auth', weight: 'global', symbol: 'All Entrypoints', consumer: 'All consumers', create: 'Apr 1, 2021'},

];
