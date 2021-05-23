import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookScrapperComponent } from './component/facebook-scrapper.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookScrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookScrapperRoutingModule {}
