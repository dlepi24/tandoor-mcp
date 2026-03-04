import { BaseClient } from './base.js';
import { ShoppingListEntry } from '../types/index.js';
export interface PaginatedShoppingListEntryList {
    count: number;
    next: string | null;
    previous: string | null;
    results: ShoppingListEntry[];
}
export declare class ShoppingListClient extends BaseClient {
    /**
     * List shopping list entries with optional filtering
     */
    listEntries(params?: {
        page?: number;
        page_size?: number;
        checked?: string;
    }): Promise<PaginatedShoppingListEntryList>;
    /**
     * Get a single shopping list entry by ID
     */
    getEntry(id: number): Promise<ShoppingListEntry>;
    /**
     * Create a new shopping list entry
     */
    createEntry(entry: any): Promise<ShoppingListEntry>;
    /**
     * Update a shopping list entry (partial update)
     */
    updateEntry(id: number, updates: any): Promise<ShoppingListEntry>;
    /**
     * Delete a shopping list entry
     */
    deleteEntry(id: number): Promise<void>;
    /**
     * Bulk check/uncheck shopping list entries
     */
    bulkCheck(ids: number[], checked: boolean): Promise<any>;
}
