// Keyword tool definitions
export const KEYWORD_TOOLS = [
    {
        name: 'list_keywords',
        description: 'List/search keywords. Optional: query (search by name), page, page_size',
        inputSchema: {
            type: 'object',
            properties: {
                query: { type: 'string', description: 'Search keywords by name' },
                page: { type: 'number' },
                page_size: { type: 'number' },
            },
        },
    },
    {
        name: 'get_keyword',
        description: 'Get keyword details by ID',
        inputSchema: {
            type: 'object',
            properties: {
                id: { type: 'number', description: 'Keyword ID' },
            },
            required: ['id'],
        },
    },
    {
        name: 'update_keyword',
        description: 'Update a keyword name or description',
        inputSchema: {
            type: 'object',
            properties: {
                id: { type: 'number', description: 'Keyword ID' },
                name: { type: 'string', description: 'Keyword name' },
                description: { type: 'string', description: 'Keyword description' },
            },
            required: ['id'],
        },
    },
    {
        name: 'delete_keyword',
        description: 'Delete a keyword by ID',
        inputSchema: {
            type: 'object',
            properties: {
                id: { type: 'number', description: 'Keyword ID' },
            },
            required: ['id'],
        },
    },
];
