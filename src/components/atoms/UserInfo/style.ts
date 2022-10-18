// FIXME: ssr error (import order?)
import { Text } from '../Text/Text';

import { styled } from '../../../styles';

export const UserInfo = styled(Text, {
  marginBottom: '0 !important',
  fontWeight: '500 !important',
  fontSize: 16,
  textTransform: 'uppercase',
  alignItems: 'center',

  [`& ${Text}`]: {
    fontSize: 24,
  },

  '@tablet': {
    fontSize: '20px !important',

    [`& ${Text}`]: {
      fontSize: '20px !important',
    },
  },
});
