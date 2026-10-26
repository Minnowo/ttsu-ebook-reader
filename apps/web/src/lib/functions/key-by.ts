/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function keyBy<T, K extends keyof T>(array: T[], key: K): Map<T[K], T> {
  return new Map(array.map((item) => [item[key], item]));
}
