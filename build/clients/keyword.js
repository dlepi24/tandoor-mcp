// Keyword-related API client
import { BaseClient } from './base.js';
export class KeywordClient extends BaseClient {
    /**
     * List keywords with optional filtering and pagination
     */
    async listKeywords(params) {
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
        return this.request(endpoint);
    }
    /**
     * Get a single keyword by ID
     */
    async getKeyword(id) {
        return this.request(`/api/keyword/${id}/`);
    }
    /**
     * Update a keyword (partial update)
     */
    async updateKeyword(id, updates) {
        return this.request(`/api/keyword/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Delete a keyword
     */
    async deleteKeyword(id) {
        return this.request(`/api/keyword/${id}/`, {
            method: 'DELETE',
        });
    }
}
