/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export const visualViewport: VisualViewport =
  typeof window !== 'undefined'
    ? window.visualViewport
    : ({
        addEventListener: () => 0,
        removeEventListener: () => 0
      } as any);
