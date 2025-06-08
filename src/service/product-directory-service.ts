import { ProductDirectory } from '../entity/product-directory.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";


export class ProductDirectoryService extends BaseService<ProductDirectory> {
  constructor(dataSource: DataSource) {
    super(dataSource, ProductDirectory);
  }
}