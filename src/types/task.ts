export interface ITaskCreateFields {
  email: string;
  task: string;
  name: string;
}

export interface IUpdateTaskText {
  id: number | undefined;
  task: string | undefined;
  changed?: boolean;
}