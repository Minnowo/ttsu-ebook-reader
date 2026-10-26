/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { browser as browserImpl } from '$app/environment';
import { NEVER, type Observable } from 'rxjs';

export function takeWhenBrowser<T>(browser = browserImpl) {
  return (obs: Observable<T>) => (browser ? obs : NEVER);
}
