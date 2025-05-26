import { Employee } from '../entity/employee.js';
import { DataSource } from "typeorm";
export declare class EmployeeService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createEmployee(data: {
        firstName: string;
        lastName: string;
        position: string;
        email?: string;
        phone?: string;
    }): Promise<Employee>;
    deleteEmployee(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=employee-service.d.ts.map