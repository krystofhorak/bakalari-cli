import * as fs from 'fs';

export const displayBanner = (bannerName: string) => {
  if (!fs.existsSync(`./src/banners/${bannerName}.txt`)) {
    console.log(`[ERROR] Banner ${bannerName} does not exist!`);
    return;
  }
  const data = fs.readFileSync(`./src/banners/${bannerName}.txt`);
  console.log(data.toString());
};
