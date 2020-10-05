import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [PlanningComponent, FormComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class PlanningModule {}
