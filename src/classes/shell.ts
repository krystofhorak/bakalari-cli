import promptSync from 'prompt-sync';

const prompt = promptSync();

export class Shell {
  basicPrompt = '> ';
  prompt = '$ ';
  username = 'guest';
  hostname = 'localhost';

  getBasicInput = (): string => {
    return prompt(this.basicPrompt);
  };
  getInput = (): string => {
    return prompt(`[${this.username}@${this.hostname}]${this.prompt}`);
  };
}
