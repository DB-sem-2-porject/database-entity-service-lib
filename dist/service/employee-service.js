import { Employee } from '../entity/employee.js';
export class EmployeeService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Employee);
    }
    async createEmployee(data) {
        const employee = this.repository.create(data);
        return this.repository.save(employee);
    }
    async deleteEmployee(data) {
        await this.repository.delete(data);
    }
}
