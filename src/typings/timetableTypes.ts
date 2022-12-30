export type Teacher = {
  Id: string;
  Abbrev: string;
  Name: string;
};

export type Timetable = {
  Teachers: Teacher[];
};
