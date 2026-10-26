/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { isElementGaiji } from './is-element-gaiji';

export function isNodeGaiji(node: Node) {
  if (!(node instanceof HTMLImageElement)) {
    return false;
  }
  return isElementGaiji(node);
}
