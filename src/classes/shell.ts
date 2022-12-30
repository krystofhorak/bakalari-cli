import promptSync from 'prompt-sync';

const prompt = promptSync();

export class Shell {
  prompt = '$ ';
  hostname = 'localhost';

  getInput = () => {
    prompt(`${this.hostname}${this.prompt}`);
  };
}
