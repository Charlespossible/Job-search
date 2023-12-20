import { JobService } from './job.service';
import { Job } from './job.model';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    root(): {
        title: string;
    };
    findOne(params: any): string;
    aboutPage(): void;
    contactPage(): void;
    jobPage(): void;
    getJob(): void;
    getRegister(): void;
    getsign(): void;
    getAllJobs(): Job[];
    searchJobs(query: string): {
        jobs: Job[];
        query: string;
    };
}
