// Shopping list tool definitions

import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const SHOPPING_LIST_TOOLS: Tool[] = [
  {
    name: 'list_shopping_list',
    description: 'List shopping list entries. By default returns only unchecked/recent items. Optional: page, page_size',
    inputSchema: {
      type: 'object',
      properties: {
        page: { type: 'number' },
        page_size: { type: 'number' },
      },
    },
  },
  {
    name: 'add_shopping_list_entry',
    description: 'Add item to shopping list. Provide food name (auto-created if new) and amount. Optionally provide unit name.',
    inputSchema: {
      type: 'object',
      properties: {
        food: { type: 'string', description: 'Food name (will find or create)' },
        amount: { type: 'number', description: 'Amount' },
        unit: { type: 'string', description: 'Unit name (optional, will find or create)' },
      },
      required: ['food', 'amount'],
    },
  },
  {
    name: 'update_shopping_list_entry',
    description: 'Update a shopping list entry. Can check/uncheck, change amount, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Shopping list entry ID' },
        amount: { type: 'number', description: 'New amount' },
        checked: { type: 'boolean', description: 'Check (true) or uncheck (false) the item' },
      },
      required: ['id'],
    },
  },
  {
    name: 'delete_shopping_list_entry',
    description: 'Delete a shopping list entry by ID',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Shopping list entry ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'bulk_check_shopping_list',
    description: 'Check or uncheck multiple shopping list entries at once',
    inputSchema: {
      type: 'object',
      properties: {
        ids: { type: 'array', items: { type: 'number' }, description: 'Array of entry IDs' },
        checked: { type: 'boolean', description: 'true to check, false to uncheck' },
      },
      required: ['ids', 'checked'],
    },
  },
];
