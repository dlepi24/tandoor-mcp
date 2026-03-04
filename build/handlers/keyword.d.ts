import { TandoorClient } from '../clients/index.js';
export declare function handleListKeywords(client: TandoorClient, args: any): Promise<string>;
export declare function handleGetKeyword(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleUpdateKeyword(client: TandoorClient, args: any): Promise<string>;
export declare function handleDeleteKeyword(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
