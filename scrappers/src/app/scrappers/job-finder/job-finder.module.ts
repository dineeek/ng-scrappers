import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFinderRoutingModule } from './job-finder-routing.module';
import { JobFinderComponent } from './component/job-finder.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [JobFinderComponent],
  imports: [
    CommonModule,
    JobFinderRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [JobFinderComponent],
})
export class JobFinderModule {}
