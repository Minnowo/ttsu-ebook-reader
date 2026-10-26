/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { BooksDbBookData } from '$lib/data/database/books-db/versions/books-db';

export interface LoadData extends Omit<BooksDbBookData, 'id'> {
  coverImage: Blob | undefined;
}
