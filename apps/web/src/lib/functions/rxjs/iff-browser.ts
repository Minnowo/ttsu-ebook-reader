/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { browser as browserImpl } from '$app/environment';
import { NEVER, type Observable } from 'rxjs';

export function iffBrowser<T>(getObs: () => Observable<T>, browser = browserImpl) {
  return browser ? getObs() : NEVER;
}
