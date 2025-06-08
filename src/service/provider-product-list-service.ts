import { ProviderProductList } from '../entity/provider-product-list.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class ProvideProductListService extends BaseService<ProviderProductList> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProviderProductList);
  }
}