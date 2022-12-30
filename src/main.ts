import { Shell } from './classes/shell';
import { displayBanner } from './functions/bannerFunctions';
import { fetchLoginToken } from './functions/fetchFunctions';

import type { UserAuth } from './typings/authTypes';

const getLoginInfo = (): UserAuth => {
  console.log('Enter your Bakaláři URL');
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

displayBanner('welcome');
const shell = new Shell();
getLoginInfo();
// fetchLoginToken().then(token => console.log(token));
