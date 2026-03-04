#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import dotenv from 'dotenv';
import { TandoorClient } from './clients/index.js';
import { RECIPE_TOOLS } from './tools/recipe.js';
import { MEAL_PLAN_TOOLS } from './tools/mealplan.js';
import { FOOD_TOOLS } from './tools/food.js';
import { KEYWORD_TOOLS } from './tools/keyword.js';
import { SUPERMARKET_CATEGORY_TOOLS } from './tools/supermarket.js';
import { SHOPPING_LIST_TOOLS } from './tools/shopping.js';
import { UNIT_TOOLS } from './tools/unit.js';
import {
  handleListRecipes,
  handleGetRecipe,
  handleCreateRecipe,
  handleUpdateRecipe,
} from './handlers/recipe.js';
import {
  handleListMealPlans,
  handleGetMealPlan,
  handleCreateMealPlan,
  handleUpdateMealPlan,
  handleDeleteMealPlan,
  handleAutoMealPlan,
  handleListMealTypes,
} from './handlers/mealplan.js';
import {
  handleListFoods,
  handleGetFood,
  handleUpdateFood,
  handleDeleteFood,
  handleMergeFoods,
} from './handlers/food.js';
import {
  handleListKeywords,
  handleGetKeyword,
  handleUpdateKeyword,
  handleDeleteKeyword,
} from './handlers/keyword.js';
import {
  handleListSupermarketCategories,
  handleCreateSupermarketCategory,
  handleUpdateSupermarketCategory,
  handleDeleteSupermarketCategory,
} from './handlers/supermarket.js';
import {
  handleListShoppingList,
  handleAddShoppingListEntry,
  handleUpdateShoppingListEntry,
  handleDeleteShoppingListEntry,
  handleBulkCheckShoppingList,
} from './handlers/shopping.js';
import {
  handleListUnits,
  handleMergeUnits,
} from './handlers/unit.js';

// Load environment variables
dotenv.config();

const TANDOOR_URL = process.env.TANDOOR_URL;
const TANDOOR_TOKEN = process.env.TANDOOR_TOKEN;

if (!TANDOOR_URL || !TANDOOR_TOKEN) {
  console.error('Error: TANDOOR_URL and TANDOOR_TOKEN must be set in .env file');
  process.exit(1);
}

// Initialize Tandoor client
const tandoorClient = new TandoorClient({
  url: TANDOOR_URL,
  token: TANDOOR_TOKEN,
});

// Create MCP server
const server = new Server(
  {
    name: 'tandoor-mcp',
    version: '2.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handle tool listing
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      ...RECIPE_TOOLS,
      ...MEAL_PLAN_TOOLS,
      ...FOOD_TOOLS,
      ...KEYWORD_TOOLS,
      ...SUPERMARKET_CATEGORY_TOOLS,
      ...SHOPPING_LIST_TOOLS,
      ...UNIT_TOOLS,
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let text: string;

    switch (name) {
      // Recipe tools
      case 'list_recipes':
        text = await handleListRecipes(tandoorClient, args);
        break;
      case 'get_recipe':
        text = await handleGetRecipe(tandoorClient, args as { id: number });
        break;
      case 'create_recipe':
        text = await handleCreateRecipe(tandoorClient, args);
        break;
      case 'update_recipe':
        text = await handleUpdateRecipe(tandoorClient, args);
        break;

      // Meal plan tools
      case 'list_meal_plans':
        text = await handleListMealPlans(tandoorClient, args);
        break;
      case 'get_meal_plan':
        text = await handleGetMealPlan(tandoorClient, args as { id: number });
        break;
      case 'create_meal_plan':
        text = await handleCreateMealPlan(tandoorClient, args);
        break;
      case 'update_meal_plan':
        text = await handleUpdateMealPlan(tandoorClient, args);
        break;
      case 'delete_meal_plan':
        text = await handleDeleteMealPlan(tandoorClient, args as { id: number });
        break;
      case 'auto_meal_plan':
        text = await handleAutoMealPlan(tandoorClient, args);
        break;
      case 'list_meal_types':
        text = await handleListMealTypes(tandoorClient, args);
        break;

      // Food tools
      case 'list_foods':
        text = await handleListFoods(tandoorClient, args);
        break;
      case 'get_food':
        text = await handleGetFood(tandoorClient, args as { id: number });
        break;
      case 'update_food':
        text = await handleUpdateFood(tandoorClient, args);
        break;
      case 'delete_food':
        text = await handleDeleteFood(tandoorClient, args as { id: number });
        break;
      case 'merge_foods':
        text = await handleMergeFoods(tandoorClient, args as { source_id: number; target_id: number });
        break;

      // Keyword tools
      case 'list_keywords':
        text = await handleListKeywords(tandoorClient, args);
        break;
      case 'get_keyword':
        text = await handleGetKeyword(tandoorClient, args as { id: number });
        break;
      case 'update_keyword':
        text = await handleUpdateKeyword(tandoorClient, args);
        break;
      case 'delete_keyword':
        text = await handleDeleteKeyword(tandoorClient, args as { id: number });
        break;

      // Supermarket category tools
      case 'list_supermarket_categories':
        text = await handleListSupermarketCategories(tandoorClient, args);
        break;
      case 'create_supermarket_category':
        text = await handleCreateSupermarketCategory(tandoorClient, args);
        break;
      case 'update_supermarket_category':
        text = await handleUpdateSupermarketCategory(tandoorClient, args);
        break;
      case 'delete_supermarket_category':
        text = await handleDeleteSupermarketCategory(tandoorClient, args as { id: number });
        break;

      // Shopping list tools
      case 'list_shopping_list':
        text = await handleListShoppingList(tandoorClient, args);
        break;
      case 'add_shopping_list_entry':
        text = await handleAddShoppingListEntry(tandoorClient, args);
        break;
      case 'update_shopping_list_entry':
        text = await handleUpdateShoppingListEntry(tandoorClient, args);
        break;
      case 'delete_shopping_list_entry':
        text = await handleDeleteShoppingListEntry(tandoorClient, args as { id: number });
        break;
      case 'bulk_check_shopping_list':
        text = await handleBulkCheckShoppingList(tandoorClient, args as { ids: number[]; checked: boolean });
        break;

      // Unit tools
      case 'list_units':
        text = await handleListUnits(tandoorClient, args);
        break;
      case 'merge_units':
        text = await handleMergeUnits(tandoorClient, args as { source_id: number; target_id: number });
        break;

      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [{ type: 'text', text }],
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Tandoor MCP server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
