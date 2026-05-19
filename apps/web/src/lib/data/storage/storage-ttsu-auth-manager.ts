/**
 * @license BSD-3-Clause
 * Copyright (c) 2026, ッツ Reader Authors
 * All rights reserved.
 */

import { unlockStorageData, type StorageUnlockAction } from '$lib/data/storage/storage-source-manager';
import { database } from '$lib/data/store';
import { AuthType, type StorageAuthManager } from './storage-auth-manager';

// Unlocking can prompt the user for a password, so results are cached per storage
// source across requests, the same way storageOAuthTokens caches OAuth tokens.
// Callers must invalidate an entry (see settings-storage-source(-list).svelte)
// whenever the underlying credentials, server URL, or storage source name change.
export const storageTtsuAuthTokens = new Map<string, StorageUnlockAction>();

/**
 * Auth for the ttsu-sync-server (https://github.com/Minnowo/ttsu-sync-server).
 * The server ignores the Basic Auth username and treats the password as an API
 * key, so the client ID field is repurposed here to hold the server URL.
 */
export class StorageTtsuAuthManager implements StorageAuthManager {
  getAuthType(): AuthType {
    return AuthType.BASIC;
  }

  async getServerUrl(
    storageSourceName: string,
    askForStorageUnlock: boolean
  ): Promise<string | undefined> {
    const unlockResult = await this.unlock(storageSourceName, askForStorageUnlock);

    return unlockResult?.clientId;
  }

  async getToken(
    _window: Window,
    storageSourceName: string,
    askForStorageUnlock: boolean,
    _authWindow: Window
  ): Promise<string | undefined> {
    const unlockResult = await this.unlock(storageSourceName, askForStorageUnlock);

    if (!unlockResult) {
      throw new Error(`Unable to unlock required data`);
    }

    return btoa(`ttsu-client:${unlockResult.clientSecret}`);
  }

  private async unlock(
    storageSourceName: string,
    askForStorageUnlock: boolean
  ): Promise<StorageUnlockAction | undefined> {
    const cached = storageTtsuAuthTokens.get(storageSourceName);

    if (cached) {
      return cached;
    }

    const db = await database.db;
    const storageSource = await db.get('storageSource', storageSourceName);

    if (!storageSource) {
      throw new Error(`No storage source with name ${storageSourceName} found`);
    }

    const unlockResult = await unlockStorageData(
      storageSource,
      'You are trying to access protected data',
      askForStorageUnlock
        ? {
            action: `Enter the correct password for ${storageSourceName} and login to your account if required to proceed`,
            encryptedData: storageSource.data,
            forwardSecret: true
          }
        : undefined
    );

    if (unlockResult) {
      storageTtsuAuthTokens.set(storageSourceName, unlockResult);
    }

    return unlockResult;
  }
}
