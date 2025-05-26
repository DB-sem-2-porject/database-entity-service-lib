import { Customer } from '../entity/customer.js';
export declare class CustomerService {
    private repository;
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