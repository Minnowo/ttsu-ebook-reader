/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function isElementGaiji(el: HTMLImageElement) {
  return Array.from(el.classList).some((className) => className.includes('gaiji'));
}
