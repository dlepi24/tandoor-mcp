import { TandoorClient } from '../clients/index.js';
export declare function handleListSupermarketCategories(client: TandoorClient, args: any): Promise<string>;
export declare function handleCreateSupermarketCategory(client: TandoorClient, args: any): Promise<string>;
export declare function handleUpdateSupermarketCategory(client: TandoorClient, args: any): Promise<string>;
export declare function handleDeleteSupermarketCategory(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
