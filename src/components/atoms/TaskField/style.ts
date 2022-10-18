import { styled } from "../../../styles";

export const TaskField = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  background: '$greyQuaternary',
  border: '1px solid $border',
  transition: '0.3s ease-in-out',

  '& > button': {
    width: 42,
    borderLeft: '1px solid $border',
  },
});

export const Text = styled('span', {
  wordBreak: 'break-all',
  display: 'block',
  flexShrink: 1,
  position: 'relative',
  width: '100%',
  padding: '10px 0 10px 16px',
  overflow: 'hidden',
  color: '$textOpacity',
  fontSize: 16,
  transition: 'color 0.3s ease-in-out',
});