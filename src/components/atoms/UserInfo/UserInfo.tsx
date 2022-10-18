import { UserInfoProps } from './types';

import * as S from './style';
import { Space } from "../Space/Space";
import { Text } from "../Text/Text";

export const UserInfo = (props: UserInfoProps) => {
  const { name, email } = props;

  return (
    <S.UserInfo>
      <Space align="center">
        {name}
        <Text size="middle" align="center" type="secondary">{email}</Text>
      </Space>
    </S.UserInfo>
  );
};
