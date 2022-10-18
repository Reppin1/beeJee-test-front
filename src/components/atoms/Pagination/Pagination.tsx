import { FC, useEffect } from 'react';
import { Button } from "../Button/Button";
import { PaginationProps } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import * as S from './style';

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  setPage,
  prevPage,
  nextPage,
  gaps,
  }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page]);

  return (
    <S.Container>
      {totalPages > 1 ?
        <>
          <Button
            margin={true}
            size="small"
            onClick={prevPage}
            disabled={page === 1}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            margin={true}
            onClick={() => setPage(1)}
            size="small"
            active={page === 1}
          >
            1
          </Button>
          {gaps.before ? "..." : null}
          {gaps.paginationGroup.map((el: number) => (
            <Button
              size="small"
              margin={true}
              onClick={() => setPage(el)}
              key={el}
              active={page === el}
            >
              {el}
            </Button>
          ))}
          {gaps.after ? "..." : null}
          <Button
            margin={true}
            size="small"
            onClick={() => setPage(totalPages)}
            active={page === totalPages}
          >
            {totalPages}
          </Button>
          <Button
            margin={true}
            size="small"
            onClick={nextPage}
            disabled={page === totalPages}
          >
            <ArrowRightIcon />
          </Button>
        </>
        : null}
    </S.Container>
  )
};