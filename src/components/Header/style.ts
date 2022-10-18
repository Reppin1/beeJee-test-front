import { Space } from '../atoms/Space/style';

import { styled } from '../../styles';

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 3,
  top: 0,
  right: 0,
  left: 0,
  height: 72,
  padding: '0 32px 0 18px',
  backgroundColor: '$white',
  boxShadow: '0 4px 4px rgba(2, 6, 74, 0.02)',
  transition: '0.3s ease-in-out',

  '& > div': {
    '&:last-child': {
      display: 'flex',
      alignItems: 'center',
    },
  },
});

export const Name = styled('span', {
  marginLeft: '8px',
  fontSize: '24px',
  fontWeight: '500',
});

export const Beta = styled('div', {
  opacity: 0.3,
  marginLeft: '.5rem',
  color: '$textDark',
  fontSize: '.75rem',
});

export const ConnectWrapper = styled(Space, {flexDirection:'row-reverse'});
