// Recipe-related API client
import { BaseClient } from './base.js';
export class RecipeClient extends BaseClient {
    /**
     * List recipes with optional filtering and pagination
     */
    async listRecipes(params) {
        const searchParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    if (Array.isArray(value)) {
                        value.forEach(v => searchParams.append(key, v.toString()));
                    }
                    else {
                        searchParams.append(key, value.toString());
                    }
                }
            });
        }
        const queryString = searchParams.toString();
        const endpoint = `/api/recipe/${queryString ? `?${queryString}` : ''}`;
        return this.request(endpoint);
    }
    /**
     * Get a single recipe by ID
     */
    async getRecipe(id) {
        return this.request(`/api/recipe/${id}/`);
    }
    /**
     * Create a new recipe
     */
    async createRecipe(recipe) {
        return this.request('/api/recipe/', {
            method: 'POST',
            body: JSON.stringify(recipe),
        });
    }
    /**
     * Update an existing recipe (full update)
     */
    async updateRecipe(id, recipe) {
        return this.request(`/api/recipe/${id}/`, {
            method: 'PUT',
            body: JSON.stringify(recipe),
        });
    }
    /**
     * Partially update an existing recipe
     */
    async patchRecipe(id, updates) {
        return this.request(`/api/recipe/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Search for a keyword by name, or create it if it doesn't exist
     */
    async findOrCreateKeyword(name) {
        // First, try to find the keyword
        const searchParams = new URLSearchParams({ query: name });
        const response = await this.request(`/api/keyword/?${searchParams.toString()}`);
        // Check for exact match
        const exactMatch = response.results.find(k => k.name.toLowerCase() === name.toLowerCase());
        if (exactMatch) {
            return exactMatch;
        }
        // Create new keyword if not found
        return this.request('/api/keyword/', {
            method: 'POST',
            body: JSON.stringify({ name }),
        });
    }
    /**
     * Search for a food by name, or create it if it doesn't exist
     */
    async findOrCreateFood(name) {
        // First, try to find the food
        const searchParams = new URLSearchParams({ query: name });
        const response = await this.request(`/api/food/?${searchParams.toString()}`);
        // Check for exact match
        const exactMatch = response.results.find(f => f.name.toLowerCase() === name.toLowerCase());
        if (exactMatch) {
            return exactMatch;
        }
        // Create new food if not found
        return this.request('/api/food/', {
            method: 'POST',
            body: JSON.stringify({ name }),
        });
    }
    /**
     * Search for a unit by name
     */
    async findOrCreateUnit(name) {
        if (!name)
            return null;
        // First, try to find the unit
        const searchParams = new URLSearchParams({ query: name });
        const response = await this.request(`/api/unit/?${searchParams.toString()}`);
        // Check for exact match
        const exactMatch = response.results.find(u => u.name.toLowerCase() === name.toLowerCase());
        if (exactMatch) {
            return exactMatch;
        }
        // Create new unit if not found
        return this.request('/api/unit/', {
            method: 'POST',
            body: JSON.stringify({ name }),
        });
    }
}
