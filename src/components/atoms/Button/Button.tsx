import { FC } from 'react';

import { ButtonProps } from './types';

import * as S from './style';

export const Button: FC<ButtonProps> = (props) => {
  const {
    theme = 'primary',
    children,
    stretch,
    size = 'large',
    onClick,
    disabled,
    margin,
    active,
    css,
  } = props;
  return (
    <S.Button
      theme={theme}
      css={css}
      margin={margin}
      active={active}
      stretch={stretch}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      }}
      size={size}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};
