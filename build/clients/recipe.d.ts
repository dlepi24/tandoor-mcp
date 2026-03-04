import { BaseClient } from './base.js';
import { Recipe, PaginatedRecipeList } from '../types/index.js';
export declare class RecipeClient extends BaseClient {
    /**
     * List recipes with optional filtering and pagination
     */
    listRecipes(params?: {
        page?: number;
        page_size?: number;
        query?: string;
        keywords?: number[];
        foods?: number[];
        books?: number[];
        rating_gte?: number;
        sort_order?: string;
    }): Promise<PaginatedRecipeList>;
    /**
     * Get a single recipe by ID
     */
    getRecipe(id: number): Promise<Recipe>;
    /**
     * Create a new recipe
     */
    createRecipe(recipe: Recipe): Promise<Recipe>;
    /**
     * Update an existing recipe (full update)
     */
    updateRecipe(id: number, recipe: Recipe): Promise<Recipe>;
    /**
     * Partially update an existing recipe
     */
    patchRecipe(id: number, updates: Partial<Recipe>): Promise<Recipe>;
    /**
     * Search for a keyword by name, or create it if it doesn't exist
     */
    findOrCreateKeyword(name: string): Promise<{
        id: number;
        name: string;
    }>;
    /**
     * Search for a food by name, or create it if it doesn't exist
     */
    findOrCreateFood(name: string): Promise<{
        id: number;
        name: string;
    }>;
    /**
     * Search for a unit by name
     */
    findOrCreateUnit(name: string): Promise<{
        id: number;
        name: string;
    } | null>;
}
