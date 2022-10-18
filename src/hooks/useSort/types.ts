import { ITaskFields } from "../../store/list/types";

export enum SortField {
  "status",
  "email",
  "name"
}

export interface useSortProps {
  items: ITaskFields[]
  sortFiled: SortField;
  sortParams: boolean;
}