import { User } from '../entity/user.js';
import { BaseService } from "../base-service.js";
export class UserService extends BaseService {
    constructor(dataSource) {
        super(dataSource, User);
    }
}
