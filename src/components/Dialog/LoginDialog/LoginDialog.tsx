import { Button } from "../../atoms/Button/Button";
import { Space } from "../../atoms/Space/Space";
import { Text } from "../../atoms/Text/Text";
import * as S from './style';
import { useState } from "react";
import { setLoginDialog } from "../../../store/dialog/action";
import { Input } from "../../atoms/Input/Input";
import { loginUser } from "../../../store/auth/action";
import { useTypedSelector } from "../../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";

const LoginDialog = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [validate, setValidate] = useState({
    login: false,
    password: false
  });
  const [error, setError] = useState('');

  const open = useTypedSelector((state) => state.DialogReducer.loginDialog)
  const dispatch = useTypedDispatch();

  const onChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setValues({ ...values, [name]: value });
      if (value.trim().length > 3) {
        setValidate({...validate, [name]: true})
      } else {
        setValidate({...validate, [name]: false})
      }
    }
    if (name === 'password') {
      setValues({...values, password: value})
      if (value.trim().length > 2) {
        setValidate({...validate, [name]: true})
      } else {
        setValidate({...validate, [name]: false})
      }
    }
  };

  const login = async () => {
    const logined = await dispatch(loginUser(values));
    if (logined?.login) {
      dispatch(setLoginDialog(false))
    } else {
      setError(logined?.response?.data?.message);
    }
  };

  return (
    <S.Dialog
      open={open}
      onOpenChange={setLoginDialog}
      closeIcon
      title="Вход"
      action={
        <Button theme="accept" onClick={() => login()}>Вход</Button>
      }
    >
      <Space size="default" direction="vertical" css={{ marginBottom: '1rem', width: '100%' }}>
        <Text>Логин</Text>
        <Input onChange={onChange} name="email" type="text" />
        {error && <span style={{color: 'red', fontSize: '12px'}}>{error}</span>}
        <Text>Пароль</Text>
        <Input onChange={onChange} name="password" type="password" />
      </Space>
    </S.Dialog>
  );
};

export { LoginDialog };