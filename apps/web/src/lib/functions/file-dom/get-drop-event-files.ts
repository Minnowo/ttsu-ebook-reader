/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import { getEntryFiles } from './get-entry-files';

export async function getDropEventFiles(ev: DragEvent) {
  if (!ev.dataTransfer?.items) {
    return [];
  }

  const items = Array.from(ev.dataTransfer.items)
    .filter((i) => i.kind === 'file')
    .map((i) => i.webkitGetAsEntry())
    .filter((i): i is FileSystemEntry => !!i);

  if (!items.length) {
    return [];
  }

  const nestedFiles = await Promise.all(items.map((i) => getEntryFiles(i)));
  return nestedFiles.flat();
}
