// Unit tool definitions
export const UNIT_TOOLS = [
    {
        name: 'list_units',
        description: 'List/search units. Optional: query (search by name), page, page_size',
        inputSchema: {
            type: 'object',
            properties: {
                query: { type: 'string', description: 'Search units by name' },
                page: { type: 'number' },
                page_size: { type: 'number' },
            },
        },
    },
    {
        name: 'merge_units',
        description: 'Merge one unit into another. The source unit is deleted and all references are moved to the target.',
        inputSchema: {
            type: 'object',
            properties: {
                source_id: { type: 'number', description: 'Unit ID to merge FROM (will be deleted)' },
                target_id: { type: 'number', description: 'Unit ID to merge INTO (will be kept)' },
            },
            required: ['source_id', 'target_id'],
        },
    },
];
