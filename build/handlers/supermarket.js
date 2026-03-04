// Handlers for supermarket category tools
export async function handleListSupermarketCategories(client, args) {
    const result = await client.supermarketCategories.listCategories(args);
    return JSON.stringify(result, null, 2);
}
export async function handleCreateSupermarketCategory(client, args) {
    const created = await client.supermarketCategories.createCategory(args);
    return `Supermarket category created successfully!\n\n${JSON.stringify(created, null, 2)}`;
}
export async function handleUpdateSupermarketCategory(client, args) {
    const { id, ...updates } = args;
    const updated = await client.supermarketCategories.updateCategory(id, updates);
    return `Supermarket category updated successfully!\n\n${JSON.stringify(updated, null, 2)}`;
}
export async function handleDeleteSupermarketCategory(client, args) {
    await client.supermarketCategories.deleteCategory(args.id);
    return `Supermarket category ${args.id} deleted successfully!`;
}
