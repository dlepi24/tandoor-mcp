import { BaseClient } from './base.js';
import { Food } from '../types/index.js';
export interface PaginatedFoodList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Food[];
}
export declare class FoodClient extends BaseClient {
    /**
     * List foods with optional filtering and pagination
     */
    listFoods(params?: {
        page?: number;
        page_size?: number;
        query?: string;
    }): Promise<PaginatedFoodList>;
    /**
     * Get a single food by ID
     */
    getFood(id: number): Promise<Food>;
    /**
     * Update a food (partial update)
     */
    updateFood(id: number, updates: Partial<Food>): Promise<Food>;
    /**
     * Delete a food
     */
    deleteFood(id: number): Promise<void>;
    /**
     * Merge one food into another (source is deleted, references moved to target)
     */
    mergeFood(id: number, targetId: number): Promise<any>;
}
