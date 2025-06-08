import { HallAssignment } from '../entity/hall-assignment.js';
import { BaseService } from "../base-service.js";
export class HallAssignmentService extends BaseService {
    constructor(dataSource) {
        super(dataSource, HallAssignment);
    }
}
