import { AppDataSource } from '../data-source.js';
import { HallAssignment } from '../entity/hall-assignment.js';
export class HallAssignmentService {
    repository = AppDataSource.getRepository(HallAssignment);
    async createAssignment(data) {
        const assignment = this.repository.create(data);
        return this.repository.save(assignment);
    }
    async deleteAssignment(data) {
        await this.repository.delete(data.id);
    }
}
