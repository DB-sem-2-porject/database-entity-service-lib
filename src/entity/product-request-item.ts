import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import 'reflect-metadata';
import { ProductRequest } from './product-request.js';
import { ProductDirectory } from './product-directory.js';

@Entity({ name: 'product_request_items' })
export class ProductRequestItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ProductRequest, { nullable: false })
  @JoinColumn({
    name: 'request_id',
    referencedColumnName: 'id'
  })
  request!: ProductRequest;

  @ManyToOne(() => ProductDirectory)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id' })
  product!: ProductDirectory;

  @Column({
    name: 'quantity',
    type: 'int',
    nullable: false,
  })
  quantity!: number;

  constructor(data?: {
    request: ProductRequest;
    product: ProductDirectory;
    quantity?: number;
  }) {
    if (data) {
      this.request = data.request;
      this.product = data.product;
      this.quantity = data.quantity ?? 1;
    }
  }
}