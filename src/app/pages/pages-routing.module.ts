import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'plugin',
        loadChildren: () =>
            import('./plugins/plugins.module').then((m) => m.PluginsModule),
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
      {
        path: 'consumer',
        loadChildren: () =>
            import('./consumers/consumers.module').then((m) => m.ConsumersModule),
      },
      {
        path: 'routes',
        loadChildren: () =>
            import('./routes/routes.module').then((m) => m.RoutesModule),
      },
      {
        path: 'service',
        loadChildren: () =>
            import('./service/services.module').then((m) => m.ServicesModule),
      }, {
        path: 'user',
        loadChildren: () =>
            import('./users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
