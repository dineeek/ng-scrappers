import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrappersDescriptionComponent } from './component/scrappers-description.component';

const routes: Routes = [
  {
    path: '',
    component: ScrappersDescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrappersDescriptionRoutingModule {}
