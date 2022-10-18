import { FC } from 'react';

import { SpaceProps } from './types';

import * as S from './style';

export const Space: FC<SpaceProps> = (props) => {
  const { children, size, align, direction, css } = props;
  return (
    <S.Space size={size} align={align} direction={direction} css={css}>
      {children}
    </S.Space>
  );
};
