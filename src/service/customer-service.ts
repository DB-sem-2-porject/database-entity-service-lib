import { Customer } from '../entity/customer.js';
import { DataSource } from "typeorm";
import { BaseService } from "../base-service.js";

export class CustomerService extends BaseService<Customer> {
  constructor(dataSource: DataSource) {
    super(dataSource, Customer);
  }
}