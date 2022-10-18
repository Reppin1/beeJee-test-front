import { FC } from 'react';

import { Space } from '../../atoms/Space/Space';
import { Text } from '../../atoms/Text/Text';
import { CubeBoxIcon } from '../../../assets/icons/CubeBoxIcon';

import * as S from './style';

export const NoTaskItems: FC = () => {
  return (
    <S.NoContract>
      <Space size="middle" direction="vertical" align="center">
        <CubeBoxIcon />
        <S.Title align="center">Нет задач</S.Title>
      </Space>
      <Space size="large" direction="vertical" align="center">
        <Text type="secondary" align="center">
          Вы можете создать задачу нажав на кнопку "Создать задачу"
        </Text>
      </Space>
    </S.NoContract>
  );
};
