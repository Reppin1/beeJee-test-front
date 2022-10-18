import { BadgeProps } from './types';

import * as S from './style';

export const Badge = (props: BadgeProps) => {
  const { color, children } = props;

  return <S.Badge color={color}>{children}</S.Badge>;
};