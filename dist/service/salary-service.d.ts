import { Salary } from '../entity/salary.js';
import { DataSource } from "typeorm";
export declare class SalaryService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createSalary(data: {
        employeeId: number;
        amount: number;
        startDate: Date;
        endDate?: Date;
    }): Promise<Salary>;
    deleteSalary(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=salary-service.d.ts.map