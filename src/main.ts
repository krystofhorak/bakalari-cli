import { Shell } from './classes/shell';
import { displayBanner } from './functions/bannerFunctions';
import { fetchLoginToken } from './functions/fetchFunctions';

displayBanner('welcome');
const shell = new Shell();
// fetchLoginToken().then(token => console.log(token));
shell.getBasicInput();
