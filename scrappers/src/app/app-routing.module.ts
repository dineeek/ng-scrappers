import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scrapper/facebook-friends',
  },
  {
    path: 'scrapper/facebook-friends',
    loadChildren: () =>
      import(
        'src/app/scrappers/facebook-scrapper/facebook-scrapper.module'
      ).then((m) => m.FacebookScrapperModule),
  },
  {
    path: '**',
    redirectTo: 'scrapper/facebook-friends',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
