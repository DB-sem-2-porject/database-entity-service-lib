import { Customer } from '../entity/customer.js';
import {DataSource, Repository} from "typeorm";

export class CustomerService {
  private dataSource: DataSource;
  private repository: Repository<Customer>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Customer);
  }

  // Create
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

  // Read
  async readCustomer(id: number): Promise<Customer | null> {
    return this.repository.findOneBy({ id });
  }

  async readAllCustomers(): Promise<Customer[]> {
    return this.repository.find();
  }

  // Update
  async updateCustomer(id: number, data: {
    fullName?: string;
    phoneNumber?: string;
    birthday?: string;
    notes?: string;
  }): Promise<Customer | null> {
    await this.repository.update(id, data);
    return this.readCustomer(id);
  }

  // Delete
  async deleteCustomer(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}

