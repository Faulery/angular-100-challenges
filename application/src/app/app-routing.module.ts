import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  { path: 'components', loadChildren: ()=> import('./components/components.module').then((m) => m.ComponentsModule) },
  { path: 'directives', loadChildren: ()=> import('./directives/directives.module').then((m) => m.DirectivesModule) },
  { path: 'services', loadChildren: ()=> import('./services/services.module').then((m) => m.ServicesModule) },
  { path: 'pipes', loadChildren: ()=> import('./pipes/pipes.module').then((m) => m.PipesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
