import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookScrapperComponent } from './facebook-scrapper/facebook-scrapper.component';

const routes: Routes = [
  {
    path: 'facebook-friends',
    component: FacebookScrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrappersRoutingModule {}
