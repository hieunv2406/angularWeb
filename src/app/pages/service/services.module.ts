import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServiceComponent} from './service.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { DetailServicesComponent } from './detail-services/detail-services.component';
import { DetailComponent } from './detail-services/detail/detail.component';
import { RoutesComponent } from './detail-services/routes/routes.component';
import { PluginsComponent } from './detail-services/plugins/plugins.component';
import { ConsumersComponent } from './detail-services/consumers/consumers.component';
import {EditConsumersComponent} from '../consumers/edit-consumers/edit-consumers.component';
import {AddServicesComponent} from './add-services/add-services.component';


@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [ ServiceComponent, AddServicesComponent, DetailServicesComponent, DetailComponent, RoutesComponent, PluginsComponent, ConsumersComponent, ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTableModule,
        MatTableModule,

        RouterModule.forChild([
            {
                path: '',
                component: ServiceComponent
            },
            {
                path: 'detail-services',
                component: DetailServicesComponent
            },
        ])
    ]
})
export class ServicesModule {
}
