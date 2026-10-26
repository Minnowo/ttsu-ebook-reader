/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { Subject } from 'rxjs';

export function subjectToSvelteWritable<S extends Subject<any>>(subject: S) {
  // @ts-expect-error Svelte uses `set` like `next`
  subject.set = subject.next;
  return subject;
}
