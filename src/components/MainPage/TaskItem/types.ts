import { ITaskFields } from "../../../store/list/types";
import { IUserFields } from "../../../store/auth/types";

export interface ITaskItemProps {
  task: ITaskFields,
  admin: IUserFields,
  refactorTask: (id: number) => void
  updateStatusTask: (id: number, status: boolean) => void
}