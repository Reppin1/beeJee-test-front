import { ChangeEvent, forwardRef } from 'react';

import { InputProps } from './types';

import * as S from './style';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      required,
      onChange,
      type,
      name,
      disabled
    },
    ref
  ) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <S.Input size="small" direction="vertical">
        <S.InputWrapper>
          <S.InputComponent
            ref={ref}
            value={value}
            name={name}
            type={type}
            onChange={(event) => handleChange(event)}
            disabled={disabled}
          />
        </S.InputWrapper>
      </S.Input>
    );
  }
);
