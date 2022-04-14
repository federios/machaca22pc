import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Z1pageComponent } from './z1page.component';

const routes: Routes = [{ path: '', component: Z1pageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Z1pageRoutingModule { }
