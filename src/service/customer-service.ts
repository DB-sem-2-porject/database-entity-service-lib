import { Customer } from '../entity/customer.js';
import {DataSource, Repository} from "typeorm";

export class CustomerService {
  private dataSource: DataSource;
  private repository: Repository<Customer>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Customer);
  }

  async createCustomer(data: {
    fullName: string;
    phoneNumber?: string;
    registrationDate?: string;
    birthday?: string;
    notes?: string;
  }): Promise<Customer> {
    const customer = this.repository.create(data);
    return this.repository.save(customer);
  }
  
  async deleteCustomer(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}