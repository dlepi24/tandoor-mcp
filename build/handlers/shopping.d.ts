import { TandoorClient } from '../clients/index.js';
export declare function handleListShoppingList(client: TandoorClient, args: any): Promise<string>;
export declare function handleAddShoppingListEntry(client: TandoorClient, args: any): Promise<string>;
export declare function handleUpdateShoppingListEntry(client: TandoorClient, args: any): Promise<string>;
export declare function handleDeleteShoppingListEntry(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleBulkCheckShoppingList(client: TandoorClient, args: {
    ids: number[];
    checked: boolean;
}): Promise<string>;
