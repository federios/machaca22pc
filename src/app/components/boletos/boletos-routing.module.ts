import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletosComponent } from './boletos.component';

const routes: Routes = [{ path: '', component: BoletosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletosRoutingModule { }
