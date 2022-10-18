import { styled } from '../../../styles';

export const ButtonSecondaryTheme = {
  whiteSpace: 'nowrap',
  backgroundColor: '$primaryOpacity',
  borderColor: 'transparent',
  color: '$primary',
  textShadow: 'none',

};

export const ButtonLinkTheme = {
  padding: '0 6px',
  backgroundColor: 'transparent',
  color: '$primary',
  fontSize: 12,
};

export const Button = styled('button', {
  display: 'flex',
  whiteSpace:'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$buttonPrimary',
  border: 'none',
  borderRadius: 2,
  cursor: 'pointer',
  color: '$text',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.3,
  transition: '0.3s ease-in-out',

  variants: {
    theme: {
      primary: {},
      secondary: {
        ...ButtonSecondaryTheme,
      },
      accept: {
        backgroundColor: '$green'
      },
      danger: {
        backgroundColor: '$red'
      },
      secondaryDark: {
        ...ButtonSecondaryTheme,
        color: '$textDark',
      },
      link: {
        ...ButtonLinkTheme,
      },
    },
    stretch: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: {
        padding: '8px 16px',
      },
      large: {
        padding: '12px 24px',
        margin: '3px',
      },
    },
    disabled: {
      true: {
        opacity: 0.625,
        cursor: 'not-allowed',
      },
    },
    active: {
      true: {
        opacity: 0.625,
      }
    },
    margin: {
      true: {
        margin: '0 4px'
      }
    }
  },
});
