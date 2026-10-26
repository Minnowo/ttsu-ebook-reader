/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { writableStorageSubject } from './writable-storage-subject';
import { localStorage } from '../window/local-storage';

export function writableNumberLocalStorageSubject(storage = localStorage) {
  return writableStorageSubject(
    storage,
    (x) => +x,
    (x) => `${x}`
  );
}
