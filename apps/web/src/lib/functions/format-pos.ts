/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function formatPos(position: number, direction: 'ltr' | 'rtl'): number {
  return direction === 'rtl' ? -position : position;
}
