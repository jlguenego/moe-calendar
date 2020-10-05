import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';

@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PlanningModule {}
