// Food tool definitions

import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const FOOD_TOOLS: Tool[] = [
  {
    name: 'list_foods',
    description: 'List/search foods. Optional: query (search by name), page, page_size',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search foods by name' },
        page: { type: 'number' },
        page_size: { type: 'number' },
      },
    },
  },
  {
    name: 'get_food',
    description: 'Get food details by ID, including supermarket category and nutritional properties',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Food ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'update_food',
    description: 'Update a food. Can change name, supermarket_category, ignore_shopping, plural_name, description. For supermarket_category pass {id, name}.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Food ID' },
        name: { type: 'string', description: 'Food name' },
        plural_name: { type: 'string', description: 'Plural form of the name' },
        description: { type: 'string', description: 'Description' },
        ignore_shopping: { type: 'boolean', description: 'If true, food will not appear on shopping lists' },
        supermarket_category: {
          type: 'object',
          description: 'Supermarket category to assign. Use {id, name} from list_supermarket_categories',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
          },
        },
      },
      required: ['id'],
    },
  },
  {
    name: 'delete_food',
    description: 'Delete a food by ID. Warning: removes it from all recipes.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Food ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'merge_foods',
    description: 'Merge one food into another. The source food is deleted and all recipe references are moved to the target.',
    inputSchema: {
      type: 'object',
      properties: {
        source_id: { type: 'number', description: 'Food ID to merge FROM (will be deleted)' },
        target_id: { type: 'number', description: 'Food ID to merge INTO (will be kept)' },
      },
      required: ['source_id', 'target_id'],
    },
  },
];
