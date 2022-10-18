import * as S from "./style";
import { setUpdateTaskDialog } from "../../../store/dialog/action";
import { Button } from "../../atoms/Button/Button";
import { Space } from "../../atoms/Space/Space";
import { Text } from "../../atoms/Text/Text";
import { useEffect, useState } from "react";
import { Input } from "../../atoms/Input/Input";
import { useTypedSelector } from "../../../hooks/useTypedSelector/useTypedSelector";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch/useTypedDispatch";
import { updateTextTask } from "../../../store/list/action";

const UpdateTaskDialog = () => {
  const currentTask = useTypedSelector((state) => state.ListReducer.selectedItem);
  const [values, setValues] = useState({
    task: currentTask.task,
    email: currentTask.email,
    name: currentTask.name,
  });
  const [valid, setValid] = useState(false);
  const open = useTypedSelector((state) => state.DialogReducer.updateTask);
  const dispatch = useTypedDispatch();
  const onChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'task') {
      setValues({ ...values, task: value });
      if (value.trim().length > 2 && value !== currentTask.task) {
        setValid(true)
      } else {
        setValid(false)
      }
    }
  };
  const saveTask = async () => {
    await dispatch(updateTextTask({id: currentTask.id, task: values.task}));
    dispatch(setUpdateTaskDialog(false));
  };

  useEffect(() => {
    if (currentTask) {
      setValues({...values, task: currentTask.task})
    }
  }, [currentTask]);

  return (
    <div>
      <S.Dialog
        open={open}
        onOpenChange={setUpdateTaskDialog}
        closeIcon
        title="Редактировать задачу"
        action={
          <Button disabled={!valid} theme="accept" onClick={() => saveTask()}>Сохранить</Button>
        }
      >
        <Space size="default" direction="vertical" css={{ marginBottom: '1rem', width: '100%' }}>
          <Text>Почта</Text>
          <Input disabled={true} value={currentTask.email} name="email" type="text" />
          <Text>Имя</Text>
          <Input disabled={true} value={currentTask.name} name="name" type="text" />
          <Text>Задача</Text>
          <textarea onChange={onChange} value={values.task} name="task" style={{resize: 'vertical'}} />
        </Space>
      </S.Dialog>
    </div>
  );
};

export { UpdateTaskDialog };