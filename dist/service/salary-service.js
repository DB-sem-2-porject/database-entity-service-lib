import { AppDataSource } from '../data-source.js';
import { Salary } from '../entity/salary.js';
export class SalaryService {
    repository = AppDataSource.getRepository(Salary);
    async createSalary(data) {
        const salary = this.repository.create(data);
        return this.repository.save(salary);
    }
    async deleteSalary(data) {
        await this.repository.delete(data.id);
    }
}
