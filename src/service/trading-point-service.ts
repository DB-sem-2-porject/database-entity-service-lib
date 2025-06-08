import { TradingPoint } from '../entity/trading-point.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class TradingPointService extends BaseService<TradingPoint> {
  constructor(dataSource: DataSource) {
    super(dataSource, TradingPoint);
  }
}