// Handlers for keyword tools

import { TandoorClient } from '../clients/index.js';

export async function handleListKeywords(
  client: TandoorClient,
  args: any
): Promise<string> {
  const result = await client.keywords.listKeywords(args);
  return JSON.stringify(result, null, 2);
}

export async function handleGetKeyword(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  const keyword = await client.keywords.getKeyword(args.id);
  return JSON.stringify(keyword, null, 2);
}

export async function handleUpdateKeyword(
  client: TandoorClient,
  args: any
): Promise<string> {
  const { id, ...updates } = args;
  const updated = await client.keywords.updateKeyword(id, updates);
  return `Keyword updated successfully!\n\n${JSON.stringify(updated, null, 2)}`;
}

export async function handleDeleteKeyword(
  client: TandoorClient,
  args: { id: number }
): Promise<string> {
  await client.keywords.deleteKeyword(args.id);
  return `Keyword ${args.id} deleted successfully!`;
}
