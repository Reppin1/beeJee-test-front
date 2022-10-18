import { styled } from "../../../styles";

export const Container = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  alignItems: 'center',
});

export const SortItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '8px',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$purpleOpacity',
    borderRadius: '6px',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$purpleOpacity',
        borderRadius: '6px',
      }
    }
  }
});