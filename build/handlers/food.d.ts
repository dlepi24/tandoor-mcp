import { TandoorClient } from '../clients/index.js';
export declare function handleListFoods(client: TandoorClient, args: any): Promise<string>;
export declare function handleGetFood(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleUpdateFood(client: TandoorClient, args: any): Promise<string>;
export declare function handleDeleteFood(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleMergeFoods(client: TandoorClient, args: {
    source_id: number;
    target_id: number;
}): Promise<string>;
