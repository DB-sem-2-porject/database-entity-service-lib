import { Salary } from '../entity/salary.js';
export class SalaryService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Salary);
    }
    async createSalary(data) {
        const salary = this.repository.create(data);
        return this.repository.save(salary);
    }
    async deleteSalary(data) {
        await this.repository.delete(data.id);
    }
}
