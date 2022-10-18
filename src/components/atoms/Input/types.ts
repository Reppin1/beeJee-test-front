import { ChangeEvent } from 'react';

export interface InputProps {
  value?: string | number;
  name?: string;
  type?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
