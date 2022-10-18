import { FC } from 'react';

import { TextProps } from './types';

import * as S from './style';

export const Text: FC<TextProps> = ({
   type,
   className,
   weight,
   size,
   children,
   align,
   }) => (
  <S.Text
    type={type}
    weight={weight}
    className={className}
    size={size}
    align={align}
  >
    {children}
  </S.Text>
);
