import { ReactNode } from 'react';

type TextTypes = 'secondary' | 'danger';
type TextWeight = 'normal';
type TextSizes = 'small' | 'default' | 'middle';
type TextAlign = 'left' | 'center' | 'right';

export interface TextProps {
  type?: TextTypes;
  children?: ReactNode;
  className?: string;
  weight?: TextWeight;
  size?: TextSizes;
  align?: TextAlign;
}
