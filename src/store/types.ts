import { FieldActionAuth, FieldStateAuth } from "./auth/types";
import { FieldStateList, FieldActionList } from "./list/types";
import { FieldActionDialog, FieldStateDialog } from "./dialog/types";

export interface StoreStateTypes {
  ListReducer: FieldStateList;
  DialogReducer: FieldStateDialog;
  AuthReducer: FieldStateAuth
}

export interface StoreActionTypes {
  ListAction: FieldActionList
  DialogAction: FieldActionDialog
  AuthAction: FieldActionAuth
}

export type Action = FieldActionList | FieldActionDialog | FieldActionAuth