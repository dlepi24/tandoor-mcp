// Meal plan related API client
import { BaseClient } from './base.js';
export class MealPlanClient extends BaseClient {
    /**
     * List meal plans with optional filtering and pagination
     */
    async listMealPlans(params) {
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
        const endpoint = `/api/meal-plan/${queryString ? `?${queryString}` : ''}`;
        return this.request(endpoint);
    }
    /**
     * Get a single meal plan by ID
     */
    async getMealPlan(id) {
        return this.request(`/api/meal-plan/${id}/`);
    }
    /**
     * Create a new meal plan
     */
    async createMealPlan(mealPlan) {
        return this.request('/api/meal-plan/', {
            method: 'POST',
            body: JSON.stringify(mealPlan),
        });
    }
    /**
     * Update an existing meal plan (full update)
     */
    async updateMealPlan(id, mealPlan) {
        return this.request(`/api/meal-plan/${id}/`, {
            method: 'PUT',
            body: JSON.stringify(mealPlan),
        });
    }
    /**
     * Partially update an existing meal plan
     */
    async patchMealPlan(id, updates) {
        return this.request(`/api/meal-plan/${id}/`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
        });
    }
    /**
     * Delete a meal plan
     */
    async deleteMealPlan(id) {
        return this.request(`/api/meal-plan/${id}/`, {
            method: 'DELETE',
        });
    }
    /**
     * Create meal plans automatically using the auto-planner
     */
    async autoCreateMealPlans(params) {
        return this.request('/api/auto-plan/', {
            method: 'POST',
            body: JSON.stringify(params),
        });
    }
    /**
     * List available meal types
     */
    async listMealTypes() {
        const response = await this.request('/api/meal-type/');
        // Handle both paginated {results: [...]} and plain array responses
        if (Array.isArray(response)) {
            return response;
        }
        return response.results || [];
    }
    /**
     * Get a meal type by ID
     */
    async getMealType(id) {
        return this.request(`/api/meal-type/${id}/`);
    }
}
