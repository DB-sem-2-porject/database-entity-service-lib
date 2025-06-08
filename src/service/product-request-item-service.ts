import { ProductRequestItem } from '../entity/product-request-item.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class ProductRequestItemService extends BaseService<ProductRequestItem> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProductRequestItem);
  }
}