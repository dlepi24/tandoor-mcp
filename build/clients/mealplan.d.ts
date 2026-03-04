import { BaseClient } from './base.js';
import { MealPlan, PaginatedMealPlanList, AutoMealPlan, MealType } from '../types/index.js';
export declare class MealPlanClient extends BaseClient {
    /**
     * List meal plans with optional filtering and pagination
     */
    listMealPlans(params?: {
        page?: number;
        page_size?: number;
        from_date?: string;
        to_date?: string;
        meal_type?: number[];
    }): Promise<PaginatedMealPlanList>;
    /**
     * Get a single meal plan by ID
     */
    getMealPlan(id: number): Promise<MealPlan>;
    /**
     * Create a new meal plan
     */
    createMealPlan(mealPlan: MealPlan): Promise<MealPlan>;
    /**
     * Update an existing meal plan (full update)
     */
    updateMealPlan(id: number, mealPlan: MealPlan): Promise<MealPlan>;
    /**
     * Partially update an existing meal plan
     */
    patchMealPlan(id: number, updates: Partial<MealPlan>): Promise<MealPlan>;
    /**
     * Delete a meal plan
     */
    deleteMealPlan(id: number): Promise<void>;
    /**
     * Create meal plans automatically using the auto-planner
     */
    autoCreateMealPlans(params: AutoMealPlan): Promise<any>;
    /**
     * List available meal types
     */
    listMealTypes(): Promise<MealType[]>;
    /**
     * Get a meal type by ID
     */
    getMealType(id: number): Promise<MealType>;
}
