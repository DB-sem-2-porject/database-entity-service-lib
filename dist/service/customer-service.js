import { Customer } from '../entity/customer.js';
import { BaseService } from "../base-service.js";
export class CustomerService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Customer);
    }
}
