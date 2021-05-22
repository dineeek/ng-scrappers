import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scrapper/facebook-friends',
  },
  {
    path: 'scrapper',
    loadChildren: () =>
      import('src/app/scrappers/scrappers.module').then(
        (m) => m.ScrappersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
