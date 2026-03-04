// Food-related API client

import { BaseClient } from './base.js';
import { Food } from '../types/index.js';

export interface PaginatedFoodList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Food[];
}

export class FoodClient extends BaseClient {
  /**
   * List foods with optional filtering and pagination
   */
  async listFoods(params?: {
    page?: number;
    page_size?: number;
    query?: string;
  }): Promise<PaginatedFoodList> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/api/food/${queryString ? `?${queryString}` : ''}`;

    return this.request<PaginatedFoodList>(endpoint);
  }

  /**
   * Get a single food by ID
   */
  async getFood(id: number): Promise<Food> {
    return this.request<Food>(`/api/food/${id}/`);
  }

  /**
   * Update a food (partial update)
   */
  async updateFood(id: number, updates: Partial<Food>): Promise<Food> {
    return this.request<Food>(`/api/food/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  /**
   * Delete a food
   */
  async deleteFood(id: number): Promise<void> {
    return this.request<void>(`/api/food/${id}/`, {
      method: 'DELETE',
    });
  }

  /**
   * Merge one food into another (source is deleted, references moved to target)
   */
  async mergeFood(id: number, targetId: number): Promise<any> {
    return this.request<any>(`/api/food/${id}/merge/${targetId}/`, {
      method: 'PUT',
      body: JSON.stringify({}),
    });
  }
}
