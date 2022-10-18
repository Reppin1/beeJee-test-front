import { CSS } from '@stitches/react';
import { MouseEvent as ReactMouseEvent, ReactNode } from 'react';

type ButtonTheme = 'primary' | 'secondary' | 'secondaryDark' | 'link'| 'accept'| 'danger';
type ButtonSizes = 'small' | 'large';
export type ButtonProps = {
  theme?: ButtonTheme;
  className?: string;
  children?: ReactNode;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  stretch?: boolean;
  size?: ButtonSizes;
  disabled?: boolean;
  margin?: boolean;
  active?: boolean;
  css?: CSS;
};
