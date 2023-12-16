import { Controller, Get, Render, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.model';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @Render('index')
  getIndex(): void {
    // You can add implementation for the index route if needed
  }

  @Get('jobs')
  @Render('job-search')
  getAllJobs(): Job[] {
    return this.jobService.getAllJobs();
  }

  @Get('jobs/search')
  @Render('job-search-result') // Render the 'job-search-result' template
  searchJobs(@Query('q') query: string) {
    const jobs = this.jobService.searchJobs(query);
    return { jobs, query };
  }
}
