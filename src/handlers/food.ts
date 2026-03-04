// Handlers for food tools

import { TandoorClient } from '../clients/index.js';

export async function handleListFoods(
  client: TandoorClient,
  args: any
): Promise<string> {
  const result = await client.foods.listFoods(args);
  return JSON.stringify(result, null, 2);
}

export async function handleGetFood(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  const food = await client.foods.getFood(args.id);
  return JSON.stringify(food, null, 2);
}

export async function handleUpdateFood(
  client: TandoorClient,
  args: any
): Promise<string> {
  const { id, ...updates } = args;
  const updated = await client.foods.updateFood(id, updates);
  return `Food updated successfully!\n\n${JSON.stringify(updated, null, 2)}`;
}

export async function handleDeleteFood(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  await client.foods.deleteFood(args.id);
  return `Food ${args.id} deleted successfully!`;
}

export async function handleMergeFoods(
  client: TandoorClient,
  args: { source_id: number; target_id: number }
): Promise<string> {
  const result = await client.foods.mergeFood(args.source_id, args.target_id);
  return `Food ${args.source_id} merged into ${args.target_id} successfully!\n\n${JSON.stringify(result, null, 2)}`;
}
