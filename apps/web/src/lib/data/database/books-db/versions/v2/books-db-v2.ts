/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { DBSchema } from 'idb';

export default interface BooksDbV2 extends DBSchema {
  keyvaluepairs: {
    key: string;
    value: string;
  };
  'local-forage-detect-blob-support': {
    key: string;
    value: string;
  };
}
