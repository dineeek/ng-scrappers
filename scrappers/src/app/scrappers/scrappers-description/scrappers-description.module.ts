import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrappersDescriptionRoutingModule } from './scrappers-description-routing.module';
import { ScrappersDescriptionComponent } from './component/scrappers-description.component';

@NgModule({
  declarations: [ScrappersDescriptionComponent],
  imports: [CommonModule, ScrappersDescriptionRoutingModule],
  exports: [ScrappersDescriptionComponent],
})
export class ScrappersDescriptionModule {}
