import { AppDataSource } from '../data-source.js';
import { Customer } from '../entity/customer.js';
export class CustomerService {
    repository = AppDataSource.getRepository(Customer);
    async createCustomer(data) {
        const customer = this.repository.create(data);
        return this.repository.save(customer);
    }
    async deleteCustomer(data) {
        await this.repository.delete(data.id);
    }
}
