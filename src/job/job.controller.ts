import { Controller, Get, Render, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.model';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @Render('index')
  getAllJobs(): Job[] {
    return this.jobService.getAllJobs();
  }

  @Get('search')
  @Render('job-search-result') // Render the 'job-search-result' template
  searchJobs(@Query('q')query: string) {
    const jobs = this.jobService.searchJobs(query);
    return { jobs, query };
  }
}
