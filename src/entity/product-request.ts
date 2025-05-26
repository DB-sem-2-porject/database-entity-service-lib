import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import { PRODUCT_REQUEST_STATUS_ENUM_NAME, ProductRequestStatus } from './enum/product-request-status.js';

@Entity({ name: 'product_requests' })
export class ProductRequest {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => TradingPoint, { nullable: false })
  @JoinColumn({
    name: 'trading_point_id',
    referencedColumnName: 'id'
  })
  tradingPoint!: TradingPoint;

  @ManyToOne(() => Employee)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id' })
  employee!: Employee;

  @Column({
    name: 'request_date',
    type: 'timestamp',
    nullable: false,
    default: () => 'now()'
  })
  requestDate?: Date;

  @Column({
    name: 'status',
    type: 'enum',
    enum: ProductRequestStatus,
    enumName: PRODUCT_REQUEST_STATUS_ENUM_NAME
  })
  status!: ProductRequestStatus;

  @Column({
    name: 'notes',
    type: 'text',
    default: '',
    nullable: true
  })
  notes?: boolean;

  constructor(data?: {
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status?: ProductRequestStatus;
  }) {
    if (data) {
      this.tradingPoint = data.tradingPoint;
      this.employee = data.employee;
      this.requestDate = data.requestDate ?? new Date();
      this.status = data.status ?? ProductRequestStatus.New;
    }
  }
}