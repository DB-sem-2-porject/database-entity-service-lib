import { Employee } from '../entity/employee.js';
import { BaseService } from "../base-service.js";
export class EmployeeService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Employee);
    }
}
