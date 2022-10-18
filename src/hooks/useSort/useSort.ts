import { SortField } from "./types";
import { ITaskFields } from "../../store/list/types";

export const useSort = (items: ITaskFields[], sortParams: boolean, sortFiled: SortField | string | undefined) => {
  const sortItems = [...items];
  if (sortFiled !== 'email') {
    if (sortParams) {
      return sortItems.sort(function (a, b) {
        // @ts-ignore
        return a[sortFiled] > b[sortFiled] ? 1: -1;
      })
    } else {
      return sortItems.sort(function (a, b) {
        // @ts-ignore
        return a[sortFiled] < b[sortFiled] ? 1: -1;
      })
    }
  } else {
    if (!sortParams) {
      return sortItems.sort(function (a, b) {
        // @ts-ignore
        return a[sortFiled] > b[sortFiled] ? 1: -1;
      })
    } else {
      return sortItems.sort(function (a, b) {
        // @ts-ignore
        return a[sortFiled] < b[sortFiled] ? 1: -1;
      })
    }
  }
};