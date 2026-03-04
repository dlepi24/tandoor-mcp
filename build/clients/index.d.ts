import { TandoorConfig } from '../types/index.js';
import { RecipeClient } from './recipe.js';
import { MealPlanClient } from './mealplan.js';
import { FoodClient } from './food.js';
import { KeywordClient } from './keyword.js';
import { SupermarketCategoryClient } from './supermarket.js';
import { ShoppingListClient } from './shopping.js';
import { UnitClient } from './unit.js';
export declare class TandoorClient {
    recipes: RecipeClient;
    mealPlans: MealPlanClient;
    foods: FoodClient;
    keywords: KeywordClient;
    supermarketCategories: SupermarketCategoryClient;
    shoppingList: ShoppingListClient;
    units: UnitClient;
    constructor(config: TandoorConfig);
    listRecipes(...args: Parameters<RecipeClient['listRecipes']>): Promise<import("../types/recipe.js").PaginatedRecipeList>;
    getRecipe(...args: Parameters<RecipeClient['getRecipe']>): Promise<import("../types/recipe.js").Recipe>;
    createRecipe(...args: Parameters<RecipeClient['createRecipe']>): Promise<import("../types/recipe.js").Recipe>;
    updateRecipe(...args: Parameters<RecipeClient['updateRecipe']>): Promise<import("../types/recipe.js").Recipe>;
    patchRecipe(...args: Parameters<RecipeClient['patchRecipe']>): Promise<import("../types/recipe.js").Recipe>;
    findOrCreateKeyword(...args: Parameters<RecipeClient['findOrCreateKeyword']>): Promise<{
        id: number;
        name: string;
    }>;
    findOrCreateFood(...args: Parameters<RecipeClient['findOrCreateFood']>): Promise<{
        id: number;
        name: string;
    }>;
    findOrCreateUnit(...args: Parameters<RecipeClient['findOrCreateUnit']>): Promise<{
        id: number;
        name: string;
    } | null>;
}
export * from './base.js';
export * from './recipe.js';
export * from './mealplan.js';
export * from './food.js';
export * from './keyword.js';
export * from './supermarket.js';
export * from './shopping.js';
export * from './unit.js';
