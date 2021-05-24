import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { scrapeJobs } from '../job-scrapper';
import { IJob } from '../model/IJob.model';

@Component({
  selector: 'app-job-finder',
  templateUrl: './job-finder.component.html',
  styleUrls: ['./job-finder.component.scss'],
})
export class JobFinderComponent {
  jobs: { [index: number]: IJob[] } = {};

  constructor(private http: HttpClient) {}

  getLoadedJobs(index: number): IJob[] {
    if (!this.jobs[index]) {
      this.jobs[index] = scrapeJobs(this.http, index);
    }

    return this.jobs[index];
  }
}
