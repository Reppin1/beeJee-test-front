import { Cross1Icon, CheckIcon } from "@radix-ui/react-icons";
import * as S from './style';

const StatusTask = ({status, id, updateStatusTask}: any) => {
  return (
    <div>
      {status ?
        <S.Completed onClick={() => updateStatusTask(id, false)}>
          <CheckIcon />
        </S.Completed>
        :
        <S.Failed onClick={() => updateStatusTask(id, true)}>
          <Cross1Icon />
        </S.Failed>
      }
    </div>
  );
};

export { StatusTask };