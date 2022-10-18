import { styled } from '../../../styles';

import { Text } from '../../atoms/Text/style';

export const NoContract = styled('div', {
  maxWidth: 340,
  margin: '32px auto 0',

  '& > .ant-space': {
    width: '100%',
  },
});

export const Title = styled(Text, {
  marginBottom: 12,
  fontSize: 24,
});
