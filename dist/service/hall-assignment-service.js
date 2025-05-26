import { HallAssignment } from '../entity/hall-assignment.js';
export class HallAssignmentService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(HallAssignment);
    }
    async createAssignment(data) {
        const assignment = this.repository.create(data);
        return this.repository.save(assignment);
    }
    async deleteAssignment(data) {
        await this.repository.delete(data.id);
    }
}
