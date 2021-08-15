// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-routes',
//   templateUrl: './routes.component.html',
//   styleUrls: ['./routes.component.scss']
// })
// export class RoutesComponent implements OnInit {
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
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['stripPath', 'preserveHost', 'rawView', 'name', 'tags', 'hosts', 'service', 'paths', 'created', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  disableDelete = false;
  brands = [
    {value: '10', viewValue: '10'},
    {value: '25', viewValue: '25'},
    {value: '50', viewValue: '50'},
    {value: '100', viewValue: '100'},
  ];

  constructor(private modalService: NgbModal,
              public modal: NgbModal) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialogDelete(content) {
    this.modalService.open(content, {windowClass: 'myDeleteModalClass', centered: true});
    document.getElementById('focusDelete').focus();
  }

  delete() {
    this.disableDelete = true;
  }
}

export interface PeriodicElement {
  name: string;
  tags: string;
  hosts: string;
  service: string;
  paths: string;
  created: Date;
  edit: string;
  delete: string;
  stripPath: string;
  preserveHost: string;
  rawView: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
  {
    name: 'A',
    tags: 'AD',
    hosts: 'H',
    service: 'AD',
    paths: 'HG',
    created: new Date(),
    edit: 'TR',
    delete: 'TX',
    stripPath: '',
    preserveHost: '',
    rawView: ''
  },
];
