/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export function formatPageTitle(title: string) {
  const appName = 'AJATT Reader';
  if (!title) return appName;
  return `${title} | ${appName}`;
}
