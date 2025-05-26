import { Provider } from '../entity/provider.js';
export declare class ProviderService {
    private repository;
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