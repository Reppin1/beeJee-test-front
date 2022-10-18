import { FC } from 'react';
import { TaskFieldProps } from './types';

import * as S from './style';

export const TaskField: FC<TaskFieldProps> = ({
   content,
   css,
   }) => (
  <S.TaskField css={css}>
    <S.Text>{content}</S.Text>
  </S.TaskField>
);
