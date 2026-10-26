/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export interface BookCardProps {
  id: number;
  imagePath: string | Blob;
  title: string;
  characters: number;
  lastBookModified: number;
  lastBookOpen: number;
  progress: number;
  lastBookmarkModified: number;
  isPlaceholder: boolean;
}
