import { Shell } from './classes/shell';
import { fetchLoginToken } from './functions/fetchFunctions';

const shell = new Shell();
// fetchLoginToken().then(token => console.log(token));
shell.getInput();
