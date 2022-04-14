import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    FormsModule
  ]
})
export class BlankModule { }
