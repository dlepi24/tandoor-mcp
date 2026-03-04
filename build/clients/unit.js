// Unit-related API client
import { BaseClient } from './base.js';
export class UnitClient extends BaseClient {
    /**
     * List units with optional filtering and pagination
     */
    async listUnits(params) {
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
        return this.request(endpoint);
    }
    /**
     * Get a single unit by ID
     */
    async getUnit(id) {
        return this.request(`/api/unit/${id}/`);
    }
    /**
     * Merge one unit into another (source is deleted, references moved to target)
     */
    async mergeUnit(id, targetId) {
        return this.request(`/api/unit/${id}/merge/${targetId}/`, {
            method: 'PUT',
            body: JSON.stringify({}),
        });
    }
}
