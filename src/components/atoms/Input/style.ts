import { styled } from '../../../styles';
import { Space } from '../Space/Space';

export const Input = styled(Space, {
  width: '100%',
});

export const InputComponent = styled('input', {
  width: '100%',
  height: 36,
  padding: '12px 16px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1,
  transition: '0.3s ease-in-out',

  '&:disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
});

export const InputWrapper = styled('div', {
  display: 'flex',
  backgroundColor: '$greyTertiary',
  transition: '0.3s ease-in-out',
});
