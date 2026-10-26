/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function match(param: string): boolean {
  return /^\d+$/.test(param);
}
