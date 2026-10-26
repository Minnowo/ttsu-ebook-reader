/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export interface HtmlzContent {
  'index.html': string;
  'metadata.opf': string;
  'style.css': string;
  [key: string]: string | Blob;
}
