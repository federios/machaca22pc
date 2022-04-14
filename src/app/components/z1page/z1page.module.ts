import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Z1pageRoutingModule } from './z1page-routing.module';
import { Z1pageComponent } from './z1page.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    Z1pageComponent
  ],
  imports: [
    CommonModule,
    Z1pageRoutingModule,
    CountdownModule
  ]
})
export class Z1pageModule { }
