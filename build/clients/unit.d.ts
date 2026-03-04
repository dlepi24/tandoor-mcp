import { BaseClient } from './base.js';
import { Unit } from '../types/index.js';
export interface PaginatedUnitList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Unit[];
}
export declare class UnitClient extends BaseClient {
    /**
     * List units with optional filtering and pagination
     */
    listUnits(params?: {
        page?: number;
        page_size?: number;
        query?: string;
    }): Promise<PaginatedUnitList>;
    /**
     * Get a single unit by ID
     */
    getUnit(id: number): Promise<Unit>;
    /**
     * Merge one unit into another (source is deleted, references moved to target)
     */
    mergeUnit(id: number, targetId: number): Promise<any>;
}
