/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { Observable } from 'rxjs';
import type { Readable } from 'svelte/store';

export function readableToObservable<T>(readable: Readable<T>): Observable<T> {
  return new Observable<T>((subscriber) =>
    readable.subscribe((x) => {
      subscriber.next(x);
    })
  );
}
