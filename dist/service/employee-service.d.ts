import { Employee } from '../entity/employee.js';
export declare class EmployeeService {
    private repository;
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