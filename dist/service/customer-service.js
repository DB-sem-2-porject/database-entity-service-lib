import { Customer } from '../entity/customer.js';
export class CustomerService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Customer);
    }
    // Create
    async createCustomer(data) {
        const customer = this.repository.create(data);
        return this.repository.save(customer);
    }
    // Read
    async readCustomer(id) {
        return this.repository.findOneBy({ id });
    }
    async readAllCustomers() {
        return this.repository.find();
    }
    // Update
    async updateCustomer(id, data) {
        await this.repository.update(id, data);
        return this.readCustomer(id);
    }
    // Delete
    async deleteCustomer(data) {
        await this.repository.delete(data.id);
    }
}
