import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: '**',
    redirectTo: 'app/welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {
}
