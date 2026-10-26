/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { localStorage } from '../window/local-storage';
import { writableStorageSubject } from './writable-storage-subject';

export function writableNumberOrNullLocalStorageSubject(storage = localStorage) {
  return writableStorageSubject<number | null>(
    storage,
    (x) => (x === 'null' ? null : +x),
    (x) => `${x}`
  );
}
