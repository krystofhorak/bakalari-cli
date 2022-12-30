import * as fs from 'fs';

import { shell } from '../main';

export const displayBanner = (bannerName: string) => {
  if (!fs.existsSync(`./src/banners/${bannerName}.txt`)) {
    shell.logError(`Banner ${bannerName} does not exist!`);
    return;
  }
  const data = fs.readFileSync(`./src/banners/${bannerName}.txt`);
  console.log(data.toString().trimEnd());
};
