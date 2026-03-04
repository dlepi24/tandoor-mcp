// Supermarket category API client

import { BaseClient } from './base.js';
import { SupermarketCategory } from '../types/index.js';

export interface PaginatedSupermarketCategoryList {
  count: number;
  next: string | null;
  previous: string | null;
  results: SupermarketCategory[];
}

export class SupermarketCategoryClient extends BaseClient {
  /**
   * List all supermarket categories
   */
  async listCategories(params?: {
    page?: number;
    page_size?: number;
    query?: string;
  }): Promise<PaginatedSupermarketCategoryList> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/api/supermarket-category/${queryString ? `?${queryString}` : ''}`;

    return this.request<PaginatedSupermarketCategoryList>(endpoint);
  }

  /**
   * Get a single supermarket category by ID
   */
  async getCategory(id: number): Promise<SupermarketCategory> {
    return this.request<SupermarketCategory>(`/api/supermarket-category/${id}/`);
  }

  /**
   * Create a new supermarket category
   */
  async createCategory(data: { name: string; description?: string }): Promise<SupermarketCategory> {
    return this.request<SupermarketCategory>('/api/supermarket-category/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Update a supermarket category
   */
  async updateCategory(id: number, updates: Partial<SupermarketCategory>): Promise<SupermarketCategory> {
    return this.request<SupermarketCategory>(`/api/supermarket-category/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  /**
   * Delete a supermarket category
   */
  async deleteCategory(id: number): Promise<void> {
    return this.request<void>(`/api/supermarket-category/${id}/`, {
      method: 'DELETE',
    });
  }
}
