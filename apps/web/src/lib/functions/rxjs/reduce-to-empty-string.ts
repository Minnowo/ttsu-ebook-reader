/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { filter, map, pipe } from 'rxjs';

export function reduceToEmptyString() {
  return pipe(
    map((): '' => ''),
    filter((_, index) => !index)
  );
}
