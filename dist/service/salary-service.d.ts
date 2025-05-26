import { Salary } from '../entity/salary.js';
export declare class SalaryService {
    private repository;
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