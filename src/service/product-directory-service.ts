import { ProductDirectory } from '../entity/product-directory.js';
import { MeasurementType } from '../entity/enum/measurement-type.js';
import { ProductCategory } from '../entity/enum/product-category.js';
import {DataSource, Repository} from "typeorm";

export class ProductDirectoryService {
  private dataSource: DataSource;
  private repository : Repository<ProductDirectory>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(ProductDirectory);
  }
  
  async createProduct(data: {
    name: string;
    description?: string;
    category?: ProductCategory;
    measurement: MeasurementType;
    createdAt?: Date;
  }): Promise<ProductDirectory> {
    const product = this.repository.create(data);
    return this.repository.save(product);
  }
  
  async deleteProduct(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}