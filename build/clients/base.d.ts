import { TandoorConfig } from '../types/index.js';
export declare class BaseClient {
    protected baseUrl: string;
    protected token: string;
    constructor(config: TandoorConfig);
    protected request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
