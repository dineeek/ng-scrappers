import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFinderComponent } from './component/job-finder.component';

const routes: Routes = [
  {
    path: '',
    component: JobFinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobFinderRoutingModule {}
