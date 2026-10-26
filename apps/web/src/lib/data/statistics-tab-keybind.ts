/**
 * @license AGPL-3.0-or-later
 * Copyright (c) 2026, Ajatt-Tools and contributors
 * All rights reserved.
 */

export enum StatisticsTabAvailableKeybind {
  RANGE_TEMPLATE_TOGGLE = 'templateRangeToggle',
  AGGREGRATION_TOGGLE = 'aggregationToggle'
}

export type StatisticsTabKeybindMap = Record<string, StatisticsTabAvailableKeybind>;
