import { styled } from "../../../styles";

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
});

export const Card = styled('section', {
  padding: 24,
  backgroundColor: '$white',
  borderRadius: 2,
  transition: '0.3s ease-in-out',

  '&:not(:last-child)': {
    marginBottom: 8,
  },
});