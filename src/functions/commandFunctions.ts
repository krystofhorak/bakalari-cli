import { fetchTeachers } from './fetchFunctions';

import type { UserAuth } from '../typings/authTypes';

export const handleCommand = async (command: string, auth: UserAuth, token: string) => {
  switch (command) {
    case 'teachers':
      const teachers = await fetchTeachers(auth, token);
      teachers.forEach(teacher => {
        console.log(`${teacher.Abbrev}: ${teacher.Name}`);
      });

    default:
      console.log(`Unknown command: ${command}`);
      return;
  }
};
