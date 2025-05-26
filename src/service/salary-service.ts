import { Salary } from '../entity/salary.js';
import {DataSource, Repository} from "typeorm";

export class SalaryService {
  private dataSource: DataSource;
  private repository : Repository<Salary>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Salary);
  }
  
  async createSalary(data: {
    employeeId: number;
    amount: number;
    startDate: Date;
    endDate?: Date;
  }): Promise<Salary> {
    const salary = this.repository.create(data);
    return this.repository.save(salary);
  }
  
  async deleteSalary(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}