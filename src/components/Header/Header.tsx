import { Button } from "../atoms/Button/Button";
import { Space } from '../atoms/Space/Space';

import { ExitIcon, EnterIcon } from "@radix-ui/react-icons";
import * as S from './style';
import { setLoginDialog } from "../../store/dialog/action";
import { logoutUser } from "../../store/auth/action";
import { useTypedSelector } from "../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch/useTypedDispatch";

const Header = () => {
  const user = useTypedSelector((state) => state.AuthReducer.user)
  const dispatch = useTypedDispatch();
  const login = () => {
    dispatch(setLoginDialog(true))
  };
  const logout = async () => {
    await dispatch(logoutUser())
  }
  return (
    <S.Header>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <S.Name style={{ marginLeft: '8px' }}>ToDoList</S.Name>
          <S.Beta>Beta</S.Beta>
        </div>
      </div>
      <div>
        <S.ConnectWrapper size="middle">
          <Space size="small">
            {user?.login ?
              <Button onClick={logout} theme="secondaryDark">
                <ExitIcon />
                <span style={{ paddingLeft: '8px' }}>Выход</span>
              </Button>
              :
              <Button onClick={login} theme="secondaryDark">
                <EnterIcon />
                <span style={{ paddingLeft: '8px' }}>Войти</span>
              </Button>
            }
          </Space>
        </S.ConnectWrapper>
      </div>
    </S.Header>
  );
};

export { Header }
