import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineupRoutingModule } from './lineup-routing.module';
import { LineupComponent } from './lineup.component';


@NgModule({
  declarations: [
    LineupComponent
  ],
  imports: [
    CommonModule,
    LineupRoutingModule
  ]
})
export class LineupModule { }
