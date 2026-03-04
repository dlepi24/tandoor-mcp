import { BaseClient } from './base.js';
import { SupermarketCategory } from '../types/index.js';
export interface PaginatedSupermarketCategoryList {
    count: number;
    next: string | null;
    previous: string | null;
    results: SupermarketCategory[];
}
export declare class SupermarketCategoryClient extends BaseClient {
    /**
     * List all supermarket categories
     */
    listCategories(params?: {
        page?: number;
        page_size?: number;
        query?: string;
    }): Promise<PaginatedSupermarketCategoryList>;
    /**
     * Get a single supermarket category by ID
     */
    getCategory(id: number): Promise<SupermarketCategory>;
    /**
     * Create a new supermarket category
     */
    createCategory(data: {
        name: string;
        description?: string;
    }): Promise<SupermarketCategory>;
    /**
     * Update a supermarket category
     */
    updateCategory(id: number, updates: Partial<SupermarketCategory>): Promise<SupermarketCategory>;
    /**
     * Delete a supermarket category
     */
    deleteCategory(id: number): Promise<void>;
}
