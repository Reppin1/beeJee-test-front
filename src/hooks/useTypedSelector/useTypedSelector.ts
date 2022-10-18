import { StoreStateTypes } from "../../store/types";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<StoreStateTypes> = useSelector;

export {useTypedSelector};
