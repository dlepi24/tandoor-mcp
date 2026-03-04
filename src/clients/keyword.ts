// Keyword-related API client

import { BaseClient } from './base.js';
import { Keyword } from '../types/index.js';

export interface PaginatedKeywordList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Keyword[];
}

export class KeywordClient extends BaseClient {
  /**
   * List keywords with optional filtering and pagination
   */
  async listKeywords(params?: {
    page?: number;
    page_size?: number;
    query?: string;
  }): Promise<PaginatedKeywordList> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/api/keyword/${queryString ? `?${queryString}` : ''}`;

    return this.request<PaginatedKeywordList>(endpoint);
  }

  /**
   * Get a single keyword by ID
   */
  async getKeyword(id: number): Promise<Keyword> {
    return this.request<Keyword>(`/api/keyword/${id}/`);
  }

  /**
   * Update a keyword (partial update)
   */
  async updateKeyword(id: number, updates: Partial<Keyword>): Promise<Keyword> {
    return this.request<Keyword>(`/api/keyword/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  /**
   * Delete a keyword
   */
  async deleteKeyword(id: number): Promise<void> {
    return this.request<void>(`/api/keyword/${id}/`, {
      method: 'DELETE',
    });
  }
}
