import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletosRoutingModule } from './boletos-routing.module';
import { BoletosComponent } from './boletos.component';


@NgModule({
  declarations: [
    BoletosComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule
  ]
})
export class BoletosModule { }
