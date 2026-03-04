// Handlers for keyword tools
export async function handleListKeywords(client, args) {
    const result = await client.keywords.listKeywords(args);
    return JSON.stringify(result, null, 2);
}
export async function handleGetKeyword(client, args) {
    const keyword = await client.keywords.getKeyword(args.id);
    return JSON.stringify(keyword, null, 2);
}
export async function handleUpdateKeyword(client, args) {
    const { id, ...updates } = args;
    const updated = await client.keywords.updateKeyword(id, updates);
    return `Keyword updated successfully!\n\n${JSON.stringify(updated, null, 2)}`;
}
export async function handleDeleteKeyword(client, args) {
    await client.keywords.deleteKeyword(args.id);
    return `Keyword ${args.id} deleted successfully!`;
}
