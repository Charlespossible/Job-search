import { Controller, Get, Post , Render, Query, Param } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.model';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('/')
  @Render('index')
  root() {
    return { title: 'Telktia Job Board platform ' };
  }

  @Get('path/:id')
  findOne(@Param() params): string{
    return  `items at ${params.id}`;
  }

  @Get('about')
  @Render('about')
  aboutPage(): void {
    
  }

  @Get('contact')
  @Render('contact')
  contactPage(): void {
  
  }

  @Get('jobdetails')
  @Render('job_details')
  jobPage(): void {
    
  }

  @Get('jobListing')
  @Render('job-listing')
  getJob(): void {

  }
  
  @Get('signUp')
  @Render('register')
  getRegister(): void {
   
  }

  @Get('login')
  @Render('signin')
  getsign(): void {
  
  }

  @Get('jobs')
  @Render('job-search')
  getAllJobs(): Job[] {
    return this.jobService.getAllJobs();
  }

  @Get('jobs/search')
  @Render('job-search-result') 
  searchJobs(@Query('q') query: string) {
    const jobs = this.jobService.searchJobs(query);
    return { jobs, query };
  }
}
