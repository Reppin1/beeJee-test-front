import { styled } from '../../../styles';

export const Text = styled('span', {
  display: 'inline-block',
  color: '$textDark',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.3,
  alignItems: 'center',
  textTransform: 'uppercase',
  transition: 'color 0.3s ease-in-out',

  variants: {
    type: {
      secondary: {
        color: '$textOpacity',
      },
      danger: {
        color: '$red',
      },
    },
    weight: {
      normal: {
        fontWeight: 400,
      },
    },
    size: {
      small: {
        fontWeight: 400,
        fontSize: 12,
      },
      default: {
        fontSize: 14,
      },
      middle: {
        fontSize: 16,
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
});
