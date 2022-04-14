import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) }, 
  { path: 'blank', loadChildren: () => import('./components/blank/blank.module').then(m => m.BlankModule) },
  { path: 'lineup', loadChildren: () => import('./components/lineup/lineup.module').then(m => m.LineupModule) },
  { path: 'boletos', loadChildren: () => import('./components/boletos/boletos.module').then(m => m.BoletosModule) },
  { path: 'onepage', loadChildren: () => import('./components/z1page/z1page.module').then(m => m.Z1pageModule) },
  { path: '**', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
