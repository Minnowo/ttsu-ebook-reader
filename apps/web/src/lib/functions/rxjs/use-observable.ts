/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { Observable } from 'rxjs';

export function observe<T>(node: Node, obs: Observable<T>) {
  const subscription = obs.subscribe();

  return {
    destroy: () => subscription.unsubscribe()
  };
}
