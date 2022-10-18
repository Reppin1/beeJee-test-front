import * as S from "./style";
import { setCreateTaskDialog } from "../../../store/dialog/action";
import { Button } from "../../atoms/Button/Button";
import { Space } from "../../atoms/Space/Space";
import { Text } from "../../atoms/Text/Text";
import { useEffect, useState } from "react";
import { Input } from "../../atoms/Input/Input";
import { useTypedSelector } from "../../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";
import { emailValidate } from "../../../utils/emailRegExp";
import { createTask } from "../../../store/list/action";

const CreateTaskDialog = () => {
  const [values, setValues] = useState({
    task: '',
    email: '',
    name: '',
  });
  const [validate, setValidate] = useState({
    task: false,
    email: false,
    name: false,
  });
  const [handleValidation, setHandleValidation] = useState({
    email: true,
    name: true,
  });
  const open = useTypedSelector((state) => state.DialogReducer.createTask)
  const dispatch = useTypedDispatch();
  const onChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'task') {
      setValues({ ...values, task: value });
      if (value.trim().length > 2) {
        setValidate({...validate, [name]: true})
      } else {
        setValidate({...validate, [name]: false})
      }
    }
    if (name === 'email') {
      setValues({ ...values, email: value });
      if (emailValidate.test(value)) {
        setValidate({...validate, [name]: true})
        setHandleValidation({...handleValidation, [name]: true});
      } else {
        setValidate({...validate, [name]: false})
        setHandleValidation({...handleValidation, [name]: false});
      }
    }
    if (name === 'name') {
      setValues({...values, name: value});
      if (value.trim().length > 2 && value.trim().length <= 40) {
        setValidate({...validate, [name]: true})
        setHandleValidation({...handleValidation, [name]: true});
      } else {
        setValidate({...validate, [name]: false})
        setHandleValidation({...handleValidation, [name]: false});
      }
    }
  };

  useEffect(() => {
    if (values.email.length > 3 && !validate.email) {
      setHandleValidation({...handleValidation, email: false});
    }
    if (values.name.length > 2 && !validate.name) {
      setHandleValidation({...handleValidation, name: false});
    }
  }, [values.email, values.name])

  const handleDisabledButton = () => {
    return !Object.values(validate).every((item) => item);
  }

  const create = async () => {
    await dispatch(createTask(values));
    dispatch(setCreateTaskDialog(false));
  };
  return (
    <div>
      <S.Dialog
        open={open}
        onOpenChange={setCreateTaskDialog}
        closeIcon
        title="Создать задачу"
        action={
          <Button disabled={handleDisabledButton()} theme="accept" onClick={() => create()}>Создать</Button>
        }
      >
        <Space size="default" direction="vertical" css={{ marginBottom: '1rem', width: '100%' }}>
          <Text>Почта</Text>
          <Input onChange={onChange} name="email" type="text" />
          {!handleValidation.email && <span style={{color: 'red', fontSize: '12px'}}>Неверный формат почты</span>}
          <Text>Имя</Text>
          <Input onChange={onChange} name="name" type="text" />
          {!handleValidation.name && <span style={{color: 'red', fontSize: '12px'}}>Не может быть меньше 3 символов и больше 40</span>}
          <Text>Задача</Text>
          <textarea onChange={onChange} name="task" style={{resize: 'vertical'}} />
        </Space>
      </S.Dialog>
    </div>
  );
};

export { CreateTaskDialog };