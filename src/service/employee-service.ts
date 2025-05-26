import { Employee } from '../entity/employee.js';
import {DataSource, Repository} from "typeorm";

export class EmployeeService {
  private dataSource: DataSource;
  private repository : Repository<Employee>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Employee);
  }
  
  async createEmployee(data: {
    firstName: string;
    lastName: string;
    position: string;
    email?: string;
    phone?: string;
  }): Promise<Employee> {
    const employee = this.repository.create(data);
    return this.repository.save(employee);
  }
  
  async deleteEmployee(data: {
    id: number,
  }): Promise<void> {
    await this.repository.delete(data);
  }
}