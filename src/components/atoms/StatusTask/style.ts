import { styled } from "../../../styles";

export const Completed = styled('div', {
  minWidth: 40,
  minHeight: 40,
  backgroundColor: '$greenOpacity',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  transition: '0.5s',

  '& > svg > path': {
    fill: '$green',
  },
  '&:hover': {
    backgroundColor: '$redOpacity',
    cursor: 'pointer',
    transitionDuration: '500ms'
  }
});

export const Failed = styled('div', {
  minWidth: 40,
  minHeight: 40,
  borderRadius: '50%',
  backgroundColor: '$redOpacity',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  transition: '0.5s',
  '& > svg > path': {
    fill: '$red',
  },
  '&:hover': {
    backgroundColor: '$greenOpacity',
    cursor: 'pointer',
    transitionDuration: '500ms'
  }
})