import { Job } from './job.model';
export declare class JobService {
    private readonly jobs;
    getAllJobs(): Job[];
    searchJobs(query: string): Job[];
}
