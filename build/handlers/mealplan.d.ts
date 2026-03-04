import { TandoorClient } from '../clients/index.js';
export declare function handleListMealPlans(client: TandoorClient, args: any): Promise<string>;
export declare function handleGetMealPlan(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleCreateMealPlan(client: TandoorClient, args: any): Promise<string>;
export declare function handleUpdateMealPlan(client: TandoorClient, args: any): Promise<string>;
export declare function handleDeleteMealPlan(client: TandoorClient, args: {
    id: number;
}): Promise<string>;
export declare function handleAutoMealPlan(client: TandoorClient, args: any): Promise<string>;
export declare function handleListMealTypes(client: TandoorClient, args: any): Promise<string>;
