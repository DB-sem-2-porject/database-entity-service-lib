import { HallAssignment } from '../entity/hall-assignment.js';
import { Employee } from "../entity/employee.js";
import { TradingPointHall } from "../entity/trading-point-hall.js";
export declare class HallAssignmentService {
    private repository;
    createAssignment(data: {
        employeeId: Employee;
        hallId: TradingPointHall;
    }): Promise<HallAssignment>;
    deleteAssignment(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=hall-assignment-service.d.ts.map