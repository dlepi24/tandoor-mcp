# Tandoor MCP Server (Fork)

Extended fork of [mc-mario/tandoor-mcp](https://github.com/mc-mario/tandoor-mcp) — a Model Context Protocol (MCP) server for [Tandoor Recipes](https://github.com/TandoorRecipes/recipes) meal and recipe management.

This fork adds comprehensive food, keyword, shopping list, supermarket category, and unit management tools beyond the original's recipe and meal plan support. It also adds meal plan sharing support for multi-user households.

## What's Different From the Original

- **Food management** — list, search, get, update, delete, and merge foods
- **Keyword management** — list, search, get, update, and delete keywords/tags
- **Shopping list management** — list, add, update, delete, and bulk check/uncheck items
- **Supermarket category management** — list, create, update, and delete aisle categories
- **Unit management** — list, search, and merge units
- **Meal plan sharing** — `shared` parameter on create and update meal plans (array of user IDs)

## Installation

Clone and build locally:

```bash
git clone https://github.com/dlepi24/tandoor-mcp.git
cd tandoor-mcp
npm install
npm run build
```

## Configuration

1. Get your API token from Tandoor: Settings > API Tokens > Create new token

2. Configure your MCP client to point to the local build:

```json
{
  "mcpServers": {
    "tandoor-mcp": {
      "command": "node",
      "args": ["/path/to/tandoor-mcp/build/index.js"],
      "env": {
        "TANDOOR_URL": "https://your-tandoor-instance.com",
        "TANDOOR_TOKEN": "your-api-token"
      }
    }
  }
}
```

## Available Tools

### Recipe Tools
- `list_recipes` — Browse and search recipes with filtering, sorting, and pagination
- `get_recipe` — Get full recipe details by ID
- `create_recipe` — Create recipes with steps, ingredients, keywords, servings, and times
- `update_recipe` — Update existing recipe metadata and content

### Meal Planning Tools
- `list_meal_plans` — View scheduled meals filtered by date range
- `get_meal_plan` — Get meal plan details by ID
- `create_meal_plan` — Schedule a recipe or title-only entry, with optional `shared` user IDs
- `update_meal_plan` — Update meal plans, including sharing with other users
- `delete_meal_plan` — Remove a meal plan entry
- `auto_meal_plan` — Auto-generate meal plans from keyword-tagged recipes
- `list_meal_types` — List available meal types (breakfast, lunch, dinner, etc.)

### Food Tools
- `list_foods` — List and search foods by name
- `get_food` — Get food details including supermarket category and properties
- `update_food` — Update food name, category, description, or shopping list behavior
- `delete_food` — Delete a food (removes from all recipes)
- `merge_foods` — Merge one food into another, moving all recipe references

### Keyword Tools
- `list_keywords` — List and search keywords/tags
- `get_keyword` — Get keyword details by ID
- `update_keyword` — Update keyword name or description
- `delete_keyword` — Delete a keyword

### Shopping List Tools
- `list_shopping_list` — List current shopping list entries
- `add_shopping_list_entry` — Add an item (auto-creates food/unit if new)
- `update_shopping_list_entry` — Update amount, check/uncheck items
- `delete_shopping_list_entry` — Remove an item
- `bulk_check_shopping_list` — Check or uncheck multiple items at once

### Supermarket Category Tools
- `list_supermarket_categories` — List all aisle/category groupings
- `create_supermarket_category` — Create a new category (e.g., Produce, Dairy, Meat)
- `update_supermarket_category` — Update a category name or description
- `delete_supermarket_category` — Delete a category

### Unit Tools
- `list_units` — List and search measurement units
- `merge_units` — Merge one unit into another, moving all references

## Development

```bash
git clone https://github.com/dlepi24/tandoor-mcp.git
cd tandoor-mcp
npm install
npm run build
```

## Credits

Original project by [mc-mario](https://github.com/mc-mario/tandoor-mcp), licensed under MIT.

## License

MIT
