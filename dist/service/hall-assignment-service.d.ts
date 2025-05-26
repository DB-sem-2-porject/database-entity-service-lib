import { HallsAssignment } from '../entity/halls-assignment.js';
import { Employee } from "../entity/employee.js";
import { TradingPointHall } from "../entity/trading-point-hall.js";
export declare class HallAssignmentService {
    private repository;
    createAssignment(data: {
        employeeId: Employee;
        hallId: TradingPointHall;
    }): Promise<HallsAssignment>;
    deleteAssignment(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=hall-assignment-service.d.ts.map