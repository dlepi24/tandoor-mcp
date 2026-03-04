// Handlers for shopping list tools

import { TandoorClient } from '../clients/index.js';

export async function handleListShoppingList(
  client: TandoorClient,
  args: any
): Promise<string> {
  const result = await client.shoppingList.listEntries(args);
  return JSON.stringify(result, null, 2);
}

export async function handleAddShoppingListEntry(
  client: TandoorClient,
  args: any
): Promise<string> {
  // Find or create the food
  const food = await client.recipes.findOrCreateFood(args.food);

  // Find or create the unit if provided
  const unit = args.unit ? await client.recipes.findOrCreateUnit(args.unit) : null;

  const entry: any = {
    food,
    amount: args.amount,
  };

  if (unit) {
    entry.unit = unit;
  }

  const created = await client.shoppingList.createEntry(entry);
  return `Shopping list entry added!\n\n${JSON.stringify(created, null, 2)}`;
}

export async function handleUpdateShoppingListEntry(
  client: TandoorClient,
  args: any
): Promise<string> {
  const { id, ...updates } = args;
  const updated = await client.shoppingList.updateEntry(id, updates);
  return `Shopping list entry updated!\n\n${JSON.stringify(updated, null, 2)}`;
}

export async function handleDeleteShoppingListEntry(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  await client.shoppingList.deleteEntry(args.id);
  return `Shopping list entry ${args.id} deleted!`;
}

export async function handleBulkCheckShoppingList(
  client: TandoorClient,
  args: { ids: number[]; checked: boolean }
): Promise<string> {
  const result = await client.shoppingList.bulkCheck(args.ids, args.checked);
  return `Bulk ${args.checked ? 'checked' : 'unchecked'} ${args.ids.length} entries!\n\n${JSON.stringify(result, null, 2)}`;
}
