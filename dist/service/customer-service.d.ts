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
    deleteCustomer(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=customer-service.d.ts.map