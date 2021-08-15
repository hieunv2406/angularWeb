import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddServicesComponent} from "./add-services/add-services.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDeleteComponent} from "../Common/confirm-delete/confirm-delete.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {
    displayedColumns: string[] = [ 'details','name', 'host', 'tags', 'created','delete'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatSort) sort: MatSort;
    colours = [10, 25, 50, 100];
    constructor(
        private modal: NgbModal,
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }


    addNew() {
        const modalRef = this.modal.open(AddServicesComponent, {
            size: 'lg',
            centered: true,
        });

    }

    delete(){
        const modalRef = this.modal.open(ConfirmDeleteComponent,{
            size:'sm',
            centered: true,
        })
        modalRef.result.then(data => {
            console.log(data)
        }).catch(error => error);
    }
}
export interface PeriodicElement {
    name: string;
    host: string;
    description: string;
    tags: any;
    created: Date;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {name: 'CIVP_test',description:'a' ,host: '10.30.132.76', tags: null , created: new Date()},

];
