import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [PlanningComponent, FormComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PlanningModule {}
