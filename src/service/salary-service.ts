import { Salary } from '../entity/salary.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class SalaryService extends BaseService<Salary> {
  constructor(dataSource: DataSource) {
    super(dataSource, Salary);
  }
}