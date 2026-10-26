/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function cloneMutateSet<T>(set: ReadonlySet<T>, action: (set: Set<T>) => void) {
  const result = new Set(set);
  action(result);
  return result;
}
