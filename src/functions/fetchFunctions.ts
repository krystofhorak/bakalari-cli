import fetch from 'node-fetch';

import type { UserAuth } from '../typings/authTypes';

import { shell } from '../main';

export const fetchLoginToken = async (auth: UserAuth): Promise<string | null> => {
  try {
    const res = await fetch(`${auth.bakalariUrl}/api/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=password&username=${auth.username}&password=${auth.password}&client_id=ANDR`,
    });
    const tokenData: any = await res.json();
    return tokenData?.access_token ?? null;
  } catch {
    shell.logError('Failed to estabilish connection with the API!');
    return null;
  }
}
