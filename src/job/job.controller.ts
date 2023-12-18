import { Controller, Get, Post , Render, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.model';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @Render('index')
  root() {
    return { title: 'Telktia Job Board platform ' };
  }

  @Get('about')
  @Render('about')
  aboutPage(): void {
    // You can add implementation specific to the about page if needed
  }

  @Get('contact')
  @Render('contact')
  contactPage(): void {
    // You can add implementation for the index route if needed
  }

  @Get('jobdetails')
  @Render('job_details')
  jobPage(): void {
    
  }

  @Get('jobListing')
  @Render('job-listing')
  getJob(): void {
    // You can add implementation for the index route if needed
  }
  
  @Get('signUp')
  @Render('register')
  getRegister(): void {
    // You can add implementation for the index route if needed
  }

  @Get('login')
  @Render('signin')
  getsign(): void {
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
