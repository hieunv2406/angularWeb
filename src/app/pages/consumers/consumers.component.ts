import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {locale} from '../../core/i18n/vocabs/en';
import {
  NbSortDirection,
  NbSortRequest,
  NbTable,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbTreeGridPresentationNode
} from '@nebular/theme';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogConsumersComponent} from './dialog-consumers/dialog-consumers.component';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDeleteComponent} from '../Common/confirm-delete/confirm-delete.component';

export interface PeriodicElement {
  username: string;
  customId: number;
  tags: string;
  created: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {customId: 1, username: 'Hydrogen', tags: 'H', created: '15/1/2019'},
  {customId: 2, username: 'Helium', tags: 'He', created: '26/5/2000'},
  {customId: 3, username: 'Lithium', tags: 'Li', created: '26/6/2018'},
];
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})

export class ConsumersComponent implements OnInit, AfterViewInit  {
  colours = [10, 25, 50, 100];
  displayedColumns: string[] = [ 'detail', 'username', 'customId', 'tags', 'created', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  openDialog() {
    const modalRef = this.modalService.open(DialogConsumersComponent, {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      centered: true, });
    modalRef.componentInstance.title = 'CREATE CONSUMER';
    modalRef.result.then(() =>
        () => { }
    );
  }
  openDialogDetail(){
    const modalRef = this.modalService.open(DialogConsumersComponent, {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      centered: true, });
    modalRef.componentInstance.title = 'DETAIL CONSUMER';
    modalRef.result.then(() =>
        () => { }
    );
  }
openDialogDelete(){
  const modalRef = this.modalService.open(ConfirmDeleteComponent, {
    backdrop: 'static',
    backdropClass: 'customBackdrop',
    centered: true, });
  modalRef.componentInstance.title = 'DELETE CONSUMER';
  modalRef.result.then(() =>
      () => { }
  );
}
}
