import { AppDataSource } from '../data-source.js';
import { Customer } from '../entity/customer.js';

export class CustomerService {
  private repository = AppDataSource.getRepository(Customer);
  
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