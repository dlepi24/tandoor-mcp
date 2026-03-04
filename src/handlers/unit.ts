// Handlers for unit tools

import { TandoorClient } from '../clients/index.js';

export async function handleListUnits(
  client: TandoorClient,
  args: any
): Promise<string> {
  const result = await client.units.listUnits(args);
  return JSON.stringify(result, null, 2);
}

export async function handleMergeUnits(
  client: TandoorClient,
  args: { source_id: number; target_id: number }
): Promise<string> {
  const result = await client.units.mergeUnit(args.source_id, args.target_id);
  return `Unit ${args.source_id} merged into ${args.target_id} successfully!\n\n${JSON.stringify(result, null, 2)}`;
}
