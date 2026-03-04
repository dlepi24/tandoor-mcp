// Food-related API client
import { BaseClient } from './base.js';
export class FoodClient extends BaseClient {
    /**
     * List foods with optional filtering and pagination
     */
    async listFoods(params) {
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
        return this.request(endpoint);
    }
    /**
     * Get a single food by ID
     */
    async getFood(id) {
        return this.request(`/api/food/${id}/`);
    }
    /**
     * Update a food (partial update)
     */
    async updateFood(id, updates) {
        return this.request(`/api/food/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Delete a food
     */
    async deleteFood(id) {
        return this.request(`/api/food/${id}/`, {
            method: 'DELETE',
        });
    }
    /**
     * Merge one food into another (source is deleted, references moved to target)
     */
    async mergeFood(id, targetId) {
        return this.request(`/api/food/${id}/merge/${targetId}/`, {
            method: 'PUT',
            body: JSON.stringify({}),
        });
    }
}
