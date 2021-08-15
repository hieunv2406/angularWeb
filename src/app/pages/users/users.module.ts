import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddUsersComponent} from './add-users/add-users.component';
import {UsersComponent} from './users.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailUsersComponent} from './detail-users/detail-users.component';
import {PortletModule} from '../Common/portlet/portlet.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: '/add-new',
        component: AddUsersComponent
    },
    {
        path: '/detail',
        component: DetailUsersComponent
    }
];

@NgModule({
    declarations: [
        AddUsersComponent,
        UsersComponent,
        DetailUsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PortletModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
    ]
})
export class UsersModule {
}
