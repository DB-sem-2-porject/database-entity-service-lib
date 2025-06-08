import { Customer } from '../entity/customer.js';
import { DataSource } from "typeorm";
export declare class CustomerService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createCustomer(data: {
        fullName: string;
        phoneNumber?: string;
        registrationDate?: string;
        birthday?: string;
        notes?: string;
    }): Promise<Customer>;
    readCustomer(id: number): Promise<Customer | null>;
    readAllCustomers(): Promise<Customer[]>;
    updateCustomer(id: number, data: {
        fullName?: string;
        phoneNumber?: string;
        birthday?: string;
        notes?: string;
    }): Promise<Customer | null>;
    deleteCustomer(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=customer-service.d.ts.map