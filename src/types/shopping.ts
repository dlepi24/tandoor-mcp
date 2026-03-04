// Shopping list and supermarket category types

import { Food, Unit } from './recipe.js';
import { User } from './common.js';

export interface SupermarketCategory {
  id?: number;
  name: string;
  description?: string | null;
  open_data_slug?: string | null;
}

export interface ShoppingListEntry {
  id?: number;
  list_recipe?: number | null;
  food: Food | null;
  unit?: Unit | null;
  amount: number;
  order?: number;
  checked?: boolean;
  ingredient?: number | null;
  created_by?: User;
  created_at?: string;
  updated_at?: string;
  completed_at?: string | null;
  delay_until?: string | null;
}
