// Shopping list API client
import { BaseClient } from './base.js';
export class ShoppingListClient extends BaseClient {
    /**
     * List shopping list entries with optional filtering
     */
    async listEntries(params) {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    searchParams.append(key, value.toString());
                }
            });
        }
        const queryString = searchParams.toString();
        const endpoint = `/api/shopping-list-entry/${queryString ? `?${queryString}` : ''}`;
        return this.request(endpoint);
    }
    /**
     * Get a single shopping list entry by ID
     */
    async getEntry(id) {
        return this.request(`/api/shopping-list-entry/${id}/`);
    }
    /**
     * Create a new shopping list entry
     */
    async createEntry(entry) {
        return this.request('/api/shopping-list-entry/', {
            method: 'POST',
            body: JSON.stringify(entry),
        });
    }
    /**
     * Update a shopping list entry (partial update)
     */
    async updateEntry(id, updates) {
        return this.request(`/api/shopping-list-entry/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Delete a shopping list entry
     */
    async deleteEntry(id) {
        return this.request(`/api/shopping-list-entry/${id}/`, {
            method: 'DELETE',
        });
    }
    /**
     * Bulk check/uncheck shopping list entries
     */
    async bulkCheck(ids, checked) {
        return this.request('/api/shopping-list-entry/bulk/', {
            method: 'POST',
            body: JSON.stringify({ ids, checked }),
        });
    }
}
