import { BaseClient } from './base.js';
import { Keyword } from '../types/index.js';
export interface PaginatedKeywordList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Keyword[];
}
export declare class KeywordClient extends BaseClient {
    /**
     * List keywords with optional filtering and pagination
     */
    listKeywords(params?: {
        page?: number;
        page_size?: number;
        query?: string;
    }): Promise<PaginatedKeywordList>;
    /**
     * Get a single keyword by ID
     */
    getKeyword(id: number): Promise<Keyword>;
    /**
     * Update a keyword (partial update)
     */
    updateKeyword(id: number, updates: Partial<Keyword>): Promise<Keyword>;
    /**
     * Delete a keyword
     */
    deleteKeyword(id: number): Promise<void>;
}
