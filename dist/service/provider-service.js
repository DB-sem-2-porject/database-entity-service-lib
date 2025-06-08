import { Provider } from '../entity/provider.js';
import { BaseService } from "../base-service.js";
export class ProviderService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Provider);
    }
}
