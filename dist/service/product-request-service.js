import { ProductRequest } from '../entity/product-request.js';
export class ProductRequestService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(ProductRequest);
    }
    async createRequest(data) {
        // const request = this.repository.create({
        //   ...data,
        //   requestDate: data.requestDate || new Date()
        // });
        const request = this.repository.create(data);
        return this.repository.save(request);
    }
    async deleteRequest(data) {
        await this.repository.delete(data.id);
    }
}
