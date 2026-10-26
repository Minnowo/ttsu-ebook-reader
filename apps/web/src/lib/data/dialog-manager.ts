/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

import type { StorageKey } from './storage/storage-types';
import { writableSubject } from '$lib/functions/svelte/store';

export interface SyncSelection {
  id: string;
  label: string;
  type: StorageKey;
}

export interface Dialog {
  component: (new (...args: any[]) => any) | string;
  props?: Record<string, any>;
  disableCloseOnClick?: boolean;
  zIndex?: string;
}

const dialogs$ = writableSubject<Dialog[]>([]);

export const dialogManager = {
  dialogs$
};
