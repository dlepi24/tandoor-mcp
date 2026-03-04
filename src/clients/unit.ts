// Unit-related API client

import { BaseClient } from './base.js';
import { Unit } from '../types/index.js';

export interface PaginatedUnitList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Unit[];
}

export class UnitClient extends BaseClient {
  /**
   * List units with optional filtering and pagination
   */
  async listUnits(params?: {
    page?: number;
    page_size?: number;
    query?: string;
  }): Promise<PaginatedUnitList> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/api/unit/${queryString ? `?${queryString}` : ''}`;

    return this.request<PaginatedUnitList>(endpoint);
  }

  /**
   * Get a single unit by ID
   */
  async getUnit(id: number): Promise<Unit> {
    return this.request<Unit>(`/api/unit/${id}/`);
  }

  /**
   * Merge one unit into another (source is deleted, references moved to target)
   */
  async mergeUnit(id: number, targetId: number): Promise<any> {
    return this.request<any>(`/api/unit/${id}/merge/${targetId}/`, {
      method: 'PUT',
      body: JSON.stringify({}),
    });
  }
}
