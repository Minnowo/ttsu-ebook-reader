/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { BookCardProps } from '$lib/components/book-card/book-card-props';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export interface SortOption {
  property: Exclude<keyof BookCardProps, 'imagePath' | 'isPlaceholder'>;
  direction: SortDirection;
}
