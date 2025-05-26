import { Customer } from '../entity/customer.js';
export class CustomerService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Customer);
    }
    async createCustomer(data) {
        const customer = this.repository.create(data);
        return this.repository.save(customer);
    }
    async deleteCustomer(data) {
        await this.repository.delete(data.id);
    }
}
