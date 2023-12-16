"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
let JobService = class JobService {
    constructor() {
        this.jobs = [
            { id: 1, title: 'Software Engineer', company: 'ABC Inc.', location: 'City A', description: '...' },
            { id: 2, title: 'Data Analyst', company: 'XYZ Corp.', location: 'City B', description: '...' },
            { id: 3, title: 'AI Specialist', company: 'Data Scientific', location: 'Lagos Nigeria', description: 'You will code like a mini god!' }
        ];
    }
    getAllJobs() {
        return this.jobs;
    }
    searchJobs(query) {
        const filteredJobs = this.jobs.filter(job => job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.company.toLowerCase().includes(query.toLowerCase()) ||
            job.location.toLowerCase().includes(query.toLowerCase()) ||
            job.description.toLowerCase().includes(query.toLowerCase()));
        return filteredJobs;
    }
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)()
], JobService);
//# sourceMappingURL=job.service.js.map