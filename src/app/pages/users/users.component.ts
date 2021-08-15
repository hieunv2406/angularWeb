import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodicElement} from '../service/service.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    description="Manage Konga users and user roles";
    displayedColumns: string[] = [
        'icon', 'username', 'firstName', 'lastName', 'created', 'updated', 'delete'
    ];

    colours = [10, 25, 50, 100];
    dataSource = new MatTableDataSource<UserTest>(ELEMENT_DATA);


    constructor() {
    }

    ngOnInit(): void {
    }

    addNew() {

    }

    delete() {

    }
}

export interface UserTest {
    username: string;
    firstName: string;
    lastName: string;
    created: Date;
    updated: Date;
    isAdmin: boolean;
}

const ELEMENT_DATA: UserTest[] = [
    {
        username: 'Admin',
        firstName: 'Admin',
        lastName: 'Admin',
        created: new Date(),
        updated: new Date(),
        isAdmin: true
    },
    {
        username: 'User',
        firstName: 'User',
        lastName: 'User',
        created: new Date(),
        updated: new Date(),
        isAdmin: false
    },

];
