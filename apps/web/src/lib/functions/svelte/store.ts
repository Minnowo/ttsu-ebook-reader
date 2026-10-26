/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { BehaviorSubject } from 'rxjs';
import { subjectToSvelteWritable } from '../rxjs/subject-to-writable';

export function writableSubject<T>(value: T) {
  return subjectToSvelteWritable(new BehaviorSubject<T>(value));
}
