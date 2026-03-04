import { TandoorClient } from '../clients/index.js';
export declare function handleListRecipes(client: TandoorClient, args: any): Promise<string>;
export declare function handleGetRecipe(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleCreateRecipe(client: TandoorClient, args: any): Promise<string>;
export declare function handleUpdateRecipe(client: TandoorClient, args: any): Promise<string>;
