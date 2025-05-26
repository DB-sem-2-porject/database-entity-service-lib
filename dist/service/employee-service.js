import { AppDataSource } from '../data-source.js';
import { Employee } from '../entity/employee.js';
export class EmployeeService {
    repository = AppDataSource.getRepository(Employee);
    async createEmployee(data) {
        const employee = this.repository.create(data);
        return this.repository.save(employee);
    }
    async deleteEmployee(data) {
        await this.repository.delete(data);
    }
}
