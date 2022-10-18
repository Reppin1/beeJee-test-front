import { SortParams } from "./SortParams/SortParams";
import { TaskItem } from "./TaskItem/TaskItem";
import { useCallback, useEffect } from "react";
import { getTasks, setSelectedTask, updateStatusTask } from "../../store/list/action";
import { NoTaskItems } from "./NoTaskItems/NoTaskItems";
import { ITaskFields } from "../../store/list/types";
import { setUpdateTaskDialog } from "../../store/dialog/action";
import { authUser } from "../../store/auth/action";
import { useTypedSelector } from "../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";
import { usePagination } from "../../hooks/usePagination/usePagination";
import { Pagination } from "../atoms/Pagination/Pagination";
import { useSort } from "../../hooks/useSort/useSort";

const MainPage = () => {
  const { items, sortBy, sort } = useTypedSelector((state) => state.ListReducer);
  const user = useTypedSelector((state) => state.AuthReducer.user);
  const dispatch = useTypedDispatch();

  const refactorTask = useCallback((id: number) => {
    dispatch(setUpdateTaskDialog(true));
    dispatch(setSelectedTask(id));
  }, [dispatch]);

  const updatedStatusTask = useCallback((id: number, status: boolean) => {
    dispatch(updateStatusTask({id: id, status: status}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(authUser())
    if (items.length === 0) {
      dispatch(getTasks())
    }
  }, []);

  const sortItems = useSort(items, sortBy.DESC, sort);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    gaps,
    totalPages,
  } = usePagination({
    contentPerPage: 3,
    count: items.length,
  });

  return (
    <div>
      <SortParams />
      {items.length !== 0 ? sortItems.slice(firstContentIndex, lastContentIndex).map((el: ITaskFields) =>
          <TaskItem
            updateStatusTask={updatedStatusTask}
            refactorTask={refactorTask}
            key={el.id}
            task={el}
            admin={user}
          />
        )
        :
        <NoTaskItems />
      }
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        gaps={gaps}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export { MainPage };