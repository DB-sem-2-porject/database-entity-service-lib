import { Provider } from '../entity/provider.js';
import { DataSource } from "typeorm";
export declare class ProviderService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createProvider(data: {
        name: string;
        contactPerson?: string;
        email?: string;
        phone?: string;
        address?: string;
    }): Promise<Provider>;
    deleteProvider(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=provider-service.d.ts.map