import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookScrapperRoutingModule } from './facebook-scrapper-routing.module';
import { FacebookScrapperComponent } from './component/facebook-scrapper.component';
import { FileUploadModule } from 'src/app/file-upload/file-upload.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [FacebookScrapperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FacebookScrapperRoutingModule,
    FileUploadModule,
  ],
  exports: [FacebookScrapperComponent],
})
export class FacebookScrapperModule {}
