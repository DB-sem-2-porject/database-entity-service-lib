import { AppDataSource } from '../data-source.js';
import { HallsAssignment } from '../entity/halls-assignment.js';
export class HallAssignmentService {
    repository = AppDataSource.getRepository(HallsAssignment);
    async createAssignment(data) {
        const assignment = this.repository.create(data);
        return this.repository.save(assignment);
    }
    async deleteAssignment(data) {
        await this.repository.delete(data.id);
    }
}
