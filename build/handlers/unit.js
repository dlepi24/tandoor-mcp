// Handlers for unit tools
export async function handleListUnits(client, args) {
    const result = await client.units.listUnits(args);
    return JSON.stringify(result, null, 2);
}
export async function handleMergeUnits(client, args) {
    const result = await client.units.mergeUnit(args.source_id, args.target_id);
    return `Unit ${args.source_id} merged into ${args.target_id} successfully!\n\n${JSON.stringify(result, null, 2)}`;
}
