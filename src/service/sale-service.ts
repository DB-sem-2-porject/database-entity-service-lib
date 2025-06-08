import { Sale } from '../entity/sale.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class SaleService extends BaseService<Sale> {
  constructor(dataSource: DataSource) {
    super(dataSource, Sale);
  }
}