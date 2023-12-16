"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const job_service_1 = require("./job.service");
let JobController = class JobController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    getIndex() {
    }
    aboutPage() {
    }
    contactPage() {
    }
    jobPage() {
    }
    getJob() {
    }
    getRegister() {
    }
    getsign() {
    }
    getAllJobs() {
        return this.jobService.getAllJobs();
    }
    searchJobs(query) {
        const jobs = this.jobService.searchJobs(query);
        return { jobs, query };
    }
};
exports.JobController = JobController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Get)('about'),
    (0, common_1.Render)('about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "aboutPage", null);
__decorate([
    (0, common_1.Get)('contact'),
    (0, common_1.Render)('contact'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "contactPage", null);
__decorate([
    (0, common_1.Get)('jobdetails'),
    (0, common_1.Render)('job_details'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "jobPage", null);
__decorate([
    (0, common_1.Get)('jobListing'),
    (0, common_1.Render)('job-listing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getJob", null);
__decorate([
    (0, common_1.Post)('signUp'),
    (0, common_1.Render)('register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getRegister", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.Render)('signin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getsign", null);
__decorate([
    (0, common_1.Get)('jobs'),
    (0, common_1.Render)('job-search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], JobController.prototype, "getAllJobs", null);
__decorate([
    (0, common_1.Get)('jobs/search'),
    (0, common_1.Render)('job-search-result'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "searchJobs", null);
exports.JobController = JobController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
//# sourceMappingURL=job.controller.js.map