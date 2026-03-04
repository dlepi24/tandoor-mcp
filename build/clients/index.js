// Main Tandoor client that combines all sub-clients
import { RecipeClient } from './recipe.js';
import { MealPlanClient } from './mealplan.js';
import { FoodClient } from './food.js';
import { KeywordClient } from './keyword.js';
import { SupermarketCategoryClient } from './supermarket.js';
import { ShoppingListClient } from './shopping.js';
import { UnitClient } from './unit.js';
export class TandoorClient {
    recipes;
    mealPlans;
    foods;
    keywords;
    supermarketCategories;
    shoppingList;
    units;
    constructor(config) {
        this.recipes = new RecipeClient(config);
        this.mealPlans = new MealPlanClient(config);
        this.foods = new FoodClient(config);
        this.keywords = new KeywordClient(config);
        this.supermarketCategories = new SupermarketCategoryClient(config);
        this.shoppingList = new ShoppingListClient(config);
        this.units = new UnitClient(config);
    }
    // Legacy methods for backward compatibility
    async listRecipes(...args) {
        return this.recipes.listRecipes(...args);
    }
    async getRecipe(...args) {
        return this.recipes.getRecipe(...args);
    }
    async createRecipe(...args) {
        return this.recipes.createRecipe(...args);
    }
    async updateRecipe(...args) {
        return this.recipes.updateRecipe(...args);
    }
    async patchRecipe(...args) {
        return this.recipes.patchRecipe(...args);
    }
    async findOrCreateKeyword(...args) {
        return this.recipes.findOrCreateKeyword(...args);
    }
    async findOrCreateFood(...args) {
        return this.recipes.findOrCreateFood(...args);
    }
    async findOrCreateUnit(...args) {
        return this.recipes.findOrCreateUnit(...args);
    }
}
// Re-export for convenience
export * from './base.js';
export * from './recipe.js';
export * from './mealplan.js';
export * from './food.js';
export * from './keyword.js';
export * from './supermarket.js';
export * from './shopping.js';
export * from './unit.js';
