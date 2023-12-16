import { JobService } from './job.service';
import { Job } from './job.model';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    getIndex(): void;
    getAllJobs(): Job[];
    searchJobs(query: string): {
        jobs: Job[];
        query: string;
    };
}
