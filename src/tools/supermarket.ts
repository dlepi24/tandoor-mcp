// Supermarket category tool definitions

import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const SUPERMARKET_CATEGORY_TOOLS: Tool[] = [
  {
    name: 'list_supermarket_categories',
    description: 'List all supermarket categories (aisle groupings for shopping lists)',
    inputSchema: {
      type: 'object',
      properties: {
        page: { type: 'number' },
        page_size: { type: 'number' },
      },
    },
  },
  {
    name: 'create_supermarket_category',
    description: 'Create a new supermarket category (e.g. Meat, Dairy, Produce)',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Category name' },
        description: { type: 'string', description: 'Optional description' },
      },
      required: ['name'],
    },
  },
  {
    name: 'update_supermarket_category',
    description: 'Update a supermarket category name or description',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Category ID' },
        name: { type: 'string', description: 'Category name' },
        description: { type: 'string', description: 'Description' },
      },
      required: ['id'],
    },
  },
  {
    name: 'delete_supermarket_category',
    description: 'Delete a supermarket category by ID',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Category ID' },
      },
      required: ['id'],
    },
  },
];
