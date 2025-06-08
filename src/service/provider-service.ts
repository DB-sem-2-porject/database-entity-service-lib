import { Provider } from '../entity/provider.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class ProviderService extends BaseService<Provider> {
  constructor(dataSource: DataSource) {
    super(dataSource, Provider);
  }
}