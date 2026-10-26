/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export default function reduceObjToBlobs<T>(data: Record<string, T | Blob>) {
  return Object.entries(data)
    .filter((d): d is [string, Blob] => d[1] instanceof Blob)
    .reduce<Record<string, Blob>>((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {});
}
