import { HttpClient } from '@angular/common/http';
import { IJob } from './model/IJob.model';

export function scrapeJobs(http: HttpClient, index: number): IJob[] {
  let jobs: IJob[] = [];

  switch (index) {
    case 1:
      jobs = scrapeCPRSK(http);
      break;
    case 2:
      //Ding.jobs
      break;
    default:
      jobs = [];
  }
  return jobs;
}

function scrapeCPRSK(http: HttpClient): IJob[] {
  const jobs: IJob[] = [];

  const pageHTML = getPageHTML(http, [
    'https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao',
    'https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao&page=1',
    'https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao&page=2',
  ]);

  pageHTML.then((html: string) => {
    const contentSplit = html.split('<div class="views-row');

    contentSplit.forEach((content) => {
      const jobName = content.match(new RegExp('hreflang="und">(.*)<'));
      const jobUrl = content.match(new RegExp('a href="(.*)" hreflang="und">'));

      if (jobName?.length && jobName[1] && jobUrl?.length && jobUrl[1]) {
        jobs.push({
          name: jobName[1],
          url: `https://cpsrk.foi.hr${jobUrl[1]}`,
        } as IJob);
      }
    });
  });

  return jobs;
}

function scrapeHZZ(http: HttpClient): IJob[] {
  const jobs: IJob[] = [];

  return jobs;
}

async function getPageHTML(
  http: HttpClient,
  url: string | string[]
): Promise<string> {
  if (url instanceof Array) {
    let promises: Promise<string>[] = [];
    url.forEach((u) => {
      promises.push(
        http
          .get(u, {
            responseType: 'text',
          })
          .toPromise()
      );
    });

    return (await Promise.all(promises)).join();
  }

  return await http
    .get(url, {
      responseType: 'text',
    })
    .toPromise();
}
