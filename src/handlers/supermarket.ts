// Handlers for supermarket category tools

import { TandoorClient } from '../clients/index.js';

export async function handleListSupermarketCategories(
  client: TandoorClient,
  args: any
): Promise<string> {
  const result = await client.supermarketCategories.listCategories(args);
  return JSON.stringify(result, null, 2);
}

export async function handleCreateSupermarketCategory(
  client: TandoorClient,
  args: any
): Promise<string> {
  const created = await client.supermarketCategories.createCategory(args);
  return `Supermarket category created successfully!\n\n${JSON.stringify(created, null, 2)}`;
}

export async function handleUpdateSupermarketCategory(
  client: TandoorClient,
  args: any
): Promise<string> {
  const { id, ...updates } = args;
  const updated = await client.supermarketCategories.updateCategory(id, updates);
  return `Supermarket category updated successfully!\n\n${JSON.stringify(updated, null, 2)}`;
}

export async function handleDeleteSupermarketCategory(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  await client.supermarketCategories.deleteCategory(args.id);
  return `Supermarket category ${args.id} deleted successfully!`;
}
