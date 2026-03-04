// Shopping list API client

import { BaseClient } from './base.js';
import { ShoppingListEntry } from '../types/index.js';

export interface PaginatedShoppingListEntryList {
  count: number;
  next: string | null;
  previous: string | null;
  results: ShoppingListEntry[];
}

export class ShoppingListClient extends BaseClient {
  /**
   * List shopping list entries with optional filtering
   */
  async listEntries(params?: {
    page?: number;
    page_size?: number;
    checked?: string;
  }): Promise<PaginatedShoppingListEntryList> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    const endpoint = `/api/shopping-list-entry/${queryString ? `?${queryString}` : ''}`;

    return this.request<PaginatedShoppingListEntryList>(endpoint);
  }

  /**
   * Get a single shopping list entry by ID
   */
  async getEntry(id: number): Promise<ShoppingListEntry> {
    return this.request<ShoppingListEntry>(`/api/shopping-list-entry/${id}/`);
  }

  /**
   * Create a new shopping list entry
   */
  async createEntry(entry: any): Promise<ShoppingListEntry> {
    return this.request<ShoppingListEntry>('/api/shopping-list-entry/', {
      method: 'POST',
      body: JSON.stringify(entry),
    });
  }

  /**
   * Update a shopping list entry (partial update)
   */
  async updateEntry(id: number, updates: any): Promise<ShoppingListEntry> {
    return this.request<ShoppingListEntry>(`/api/shopping-list-entry/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  /**
   * Delete a shopping list entry
   */
  async deleteEntry(id: number): Promise<void> {
    return this.request<void>(`/api/shopping-list-entry/${id}/`, {
      method: 'DELETE',
    });
  }

  /**
   * Bulk check/uncheck shopping list entries
   */
  async bulkCheck(ids: number[], checked: boolean): Promise<any> {
    return this.request<any>('/api/shopping-list-entry/bulk/', {
      method: 'POST',
      body: JSON.stringify({ ids, checked }),
    });
  }
}
