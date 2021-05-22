import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { MaterialModule } from '../material.module';
import { FacebookScrapperComponent } from './facebook-scrapper/facebook-scrapper.component';
import { ScrappersRoutingModule } from './scrappers-routing.module';

@NgModule({
  declarations: [FacebookScrapperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ScrappersRoutingModule,
    FileUploadModule,
  ],
  exports: [FacebookScrapperComponent],
})
export class ScrappersModule {}
