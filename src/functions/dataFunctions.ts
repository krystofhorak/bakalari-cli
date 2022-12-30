import * as fs from 'fs';

import { displayBanner } from './bannerFunctions';

import type { UserAuth } from '../typings/authTypes';

const dataFolder = './data';
const authFile = `${dataFolder}/auth.json`;

const createDataFolder = () => {
  if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
  }
};

export const loadCachedUserAuth = (): UserAuth | null => {
  if (!fs.existsSync(authFile)) return null;
  console.log('');
  displayBanner('cache');
  const loginData = fs.readFileSync(authFile);
  return JSON.parse(loginData.toString());
};

export const cacheUserAuth = (auth: UserAuth) => {
  createDataFolder();
  fs.writeFileSync(authFile, JSON.stringify(auth, null, 2));
};
