// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RoutesDetaileditComponent } from './routes-detailedit/routes-detailedit.component';
// import { DetailComponent } from './routes-detailedit/detail/detail.component';
// import { PluginsComponent } from './routes-detailedit/plugins/plugins.component';
// import { EligibleComponent } from './routes-detailedit/eligible/eligible.component';
//
//
//
// @NgModule({
//   declarations: [RoutesDetaileditComponent, DetailComponent, PluginsComponent, EligibleComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class RoutesModule { }
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoutesComponent} from './routes.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {PluginsComponent} from './routes-detailedit/plugins/plugins.component';
import {RoutesDetaileditComponent} from './routes-detailedit/routes-detailedit.component';
import {DetailComponent} from './routes-detailedit/detail/detail.component';
import { EligibleComponent } from './routes-detailedit/eligible/eligible.component';


export const routes: Routes = [
  {
    path: '',
    component: RoutesComponent
  },
  {
    path: 'router-detail',
    component: RoutesDetaileditComponent,
    children: [
      {
        path: '',
        redirectTo: 'detail',
        pathMatch: 'full'
      },
      {
        path: 'plugins',
        component: PluginsComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
      {
        path: 'eligible-consumers',
        component: EligibleComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    RoutesComponent,
    RoutesDetaileditComponent,
    DetailComponent,
    EligibleComponent,
    PluginsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    FormsModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ]
})
export class RoutesModule {
}
