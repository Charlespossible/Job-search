// job.service.ts
import { Injectable } from '@nestjs/common';
import { Job } from './job.model';

@Injectable()
export class JobService {
  private readonly jobs: Job[] = [
    { id: 1, title: 'Software Engineer', company: 'ABC Inc.', location: 'City A', description: '...' },
    { id: 2, title: 'Data Analyst', company: 'XYZ Corp.', location: 'City B', description: '...' },
    { id: 3, title: 'AI Specialist', company: 'Data Scientific', location: 'Lagos Nigeria', description: 'You will code like a mini god!' }
  ];

  getAllJobs(): Job[] {
    return this.jobs;
  }

  searchJobs(query: string): Job[] {
    // Implement search logic based on the query
    const filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );

    return filteredJobs;
  }
}
