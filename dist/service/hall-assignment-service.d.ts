import { HallAssignment } from '../entity/hall-assignment.js';
import { Employee } from "../entity/employee.js";
import { TradingPointHall } from "../entity/trading-point-hall.js";
import { DataSource } from "typeorm";
export declare class HallAssignmentService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createAssignment(data: {
        employeeId: Employee;
        hallId: TradingPointHall;
    }): Promise<HallAssignment>;
    deleteAssignment(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=hall-assignment-service.d.ts.map