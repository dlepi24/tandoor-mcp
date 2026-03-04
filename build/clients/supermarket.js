// Supermarket category API client
import { BaseClient } from './base.js';
export class SupermarketCategoryClient extends BaseClient {
    /**
     * List all supermarket categories
     */
    async listCategories(params) {
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
        return this.request(endpoint);
    }
    /**
     * Get a single supermarket category by ID
     */
    async getCategory(id) {
        return this.request(`/api/supermarket-category/${id}/`);
    }
    /**
     * Create a new supermarket category
     */
    async createCategory(data) {
        return this.request('/api/supermarket-category/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    /**
     * Update a supermarket category
     */
    async updateCategory(id, updates) {
        return this.request(`/api/supermarket-category/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Delete a supermarket category
     */
    async deleteCategory(id) {
        return this.request(`/api/supermarket-category/${id}/`, {
            method: 'DELETE',
        });
    }
}
