import * as S from './style';
import { CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "../../atoms/Button/Button";
import { setSort, setSortBy } from "../../../store/list/action";
import { setCreateTaskDialog } from "../../../store/dialog/action";
import { useTypedSelector } from "../../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";

const SortParams = () => {
  const sort = useTypedSelector((state) => state.ListReducer)
  const dispatch = useTypedDispatch();

  function setSortedParams(filed: string) {
    if (sort.sort !== filed) {
      dispatch(setSort(filed));
    } else {
      dispatch(setSortBy({DESC: !sort.sortBy.DESC}))
    }
  }
  const createTask = () => {
    dispatch(setCreateTaskDialog(true))
  };
  return (
    <S.Container>
      <S.SortItem
        active={sort.sort === 'status'}
        onClick={() => setSortedParams('status')}
      >
        Статус
        {sort.sortBy.DESC && sort.sort === 'status' ? <CaretUpIcon /> : <CaretDownIcon />}
      </S.SortItem>
      <S.SortItem
        onClick={() => setSortedParams('name')}
        active={sort.sort === 'name'}
      >
        Имя
        {sort.sortBy.DESC && sort.sort === 'name' ? <CaretUpIcon /> : <CaretDownIcon />}
      </S.SortItem>
      <S.SortItem
        onClick={() => setSortedParams('email')}
        active={sort.sort === 'email'}
      >
        Почта
        {sort.sortBy.DESC && sort.sort === 'email' ? <CaretUpIcon /> : <CaretDownIcon />}
      </S.SortItem>
      <Button onClick={createTask}>Создать задачу</Button>
    </S.Container>
  );
};

export { SortParams };