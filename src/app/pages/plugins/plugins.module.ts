import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PluginsComponent} from './plugins.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgbModalModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { AddPluginsComponent } from './add-plugins/add-plugins.component';
import { AuthenticationComponent } from './add-plugins/authentication/authentication.component';
import { SecurityComponent } from './add-plugins/security/security.component';
import { TrafficControlComponent } from './add-plugins/traffic-control/traffic-control.component';
import { LogginComponent } from './add-plugins/loggin/loggin.component';
import { BasicAuthComponent } from './add-plugins/authentication/basic-auth/basic-auth.component';
import { KeyAuthComponent } from './add-plugins/authentication/key-auth/key-auth.component';
import { Oauth2Component } from './add-plugins/authentication/oauth2/oauth2.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const PluginRoutes = [
  {
    path: '',
    component: PluginsComponent,
  },
  {
    path: 'add',
    component: AddPluginsComponent,
    children: [
      {
        path: 'authentication',
        component: AuthenticationComponent
      },
      {
        path: 'security',
        component: SecurityComponent
      },
      {
        path: 'traffic-Control',
        component: TrafficControlComponent
      },
      {
        path: 'logging',
        component: LogginComponent
      },
      {
        path: '', redirectTo: 'authentication', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  declarations: [ PluginsComponent, AddPluginsComponent, AuthenticationComponent,
    SecurityComponent, TrafficControlComponent, LogginComponent, BasicAuthComponent, KeyAuthComponent, Oauth2Component],
  imports: [
    CommonModule,
    MatButtonModule,
    [RouterModule.forChild(PluginRoutes)],
    MatTableModule,
    MatPaginatorModule,
    NgbNavModule,
    NgbModalModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents : [
    BasicAuthComponent,
    KeyAuthComponent,
    Oauth2Component
  ]
})
export class PluginsModule { }
