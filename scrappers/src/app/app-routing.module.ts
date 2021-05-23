import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scrapper/descriptions',
  },
  {
    path: 'scrapper/descriptions',
    loadChildren: () =>
      import(
        'src/app/scrappers/scrappers-description/scrappers-description.module'
      ).then((m) => m.ScrappersDescriptionModule),
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
    redirectTo: 'scrapper/descriptions',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
