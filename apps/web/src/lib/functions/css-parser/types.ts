/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export interface CssTree {
  type: 'stylesheet';
  stylesheet: Stylesheet;
}

export interface Stylesheet {
  rules: Rule[];
}

export interface Rule {
  type: 'page' | 'rule';
  selectors: string[];
  declarations: Declaration[];
}

export interface Declaration {
  type: 'declaration';
  property: string;
  value: string;
}
