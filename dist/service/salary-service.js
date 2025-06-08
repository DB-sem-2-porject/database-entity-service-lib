import { Salary } from '../entity/salary.js';
import { BaseService } from "../base-service.js";
export class SalaryService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Salary);
    }
}
