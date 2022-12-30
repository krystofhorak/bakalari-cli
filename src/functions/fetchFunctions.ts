import fetch from 'node-fetch';

import type { UserAuth } from '../typings/authTypes';
import type {
  Timetable,
  Teacher,
} from '../typings/timetableTypes';

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
};

const fetchFromApi = async(
  auth: UserAuth,
  token: string | null,
  endpoint: string,
) => {
  try {
    const res = await fetch(`${auth.bakalariUrl}/api/3/${endpoint}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    });
    const fetchedData: any = await res.json();
    return fetchedData;
  } catch {
    shell.logError('Failed to estabilish connection with the API!');
    return null;
  }
};

export const fetchTeachers = async (auth: UserAuth, token: string): Promise<Teacher[]> => {
  const teacherData: Timetable = await fetchFromApi(auth, token, 'timetable/permanent');
  return teacherData?.Teachers ?? [];
};
