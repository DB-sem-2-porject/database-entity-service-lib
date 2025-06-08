import { User } from '../entity/user.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class UserService extends BaseService<User> {
  constructor(dataSource: DataSource) {
    super(dataSource, User);
  }
}