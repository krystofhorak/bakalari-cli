import { Shell } from './classes/shell';
import { displayBanner } from './functions/bannerFunctions';
import {
  fetchLoginToken,
} from './functions/fetchFunctions';
import {
  loadCachedUserAuth,
  cacheUserAuth,
} from './functions/dataFunctions';
import { handleCommand } from './functions/commandFunctions';

import type { UserAuth } from './typings/authTypes';

export const shell = new Shell();
export const HOSTNAME = 'bakalari';

const getLoginInfo = (): UserAuth => {
  console.log('\nEnter your Bakaláři URL');
  const url = shell.getBasicInput();
  console.log('Enter your username');
  const username = shell.getBasicInput();
  console.log('Enter your password');
  const password = shell.getPassword();

  return {
    bakalariUrl: url,
    username,
    password,
  };
};

const verifyUserAuth = async (auth: UserAuth): Promise<string> => {
  console.log('\nVerifying your login info...');
  const token = await fetchLoginToken(auth);
  if (!token) return '';
  return token;
};

(async () => {
  displayBanner('welcome');
  const auth = loadCachedUserAuth() ?? getLoginInfo();
  const token = await verifyUserAuth(auth);

  if (!token) {
    shell.logError('Invalid login info!');
    return;
  }
  console.log('Logged in!\n');

  shell.setUsername(auth.username);
  shell.setHostname(HOSTNAME);
  cacheUserAuth(auth);
  
  while (true) {
    const input = shell.getInput();
    if (input === 'exit') return;
    await handleCommand(input, auth, token);
  }
})();
