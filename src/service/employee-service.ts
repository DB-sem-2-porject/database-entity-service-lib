import { Employee } from '../entity/employee.js';
import { DataSource } from "typeorm";
import { BaseService } from "../base-service.js";

export class EmployeeService extends BaseService<Employee> {
  constructor(dataSource: DataSource) {
    super(dataSource, Employee);
  }
}