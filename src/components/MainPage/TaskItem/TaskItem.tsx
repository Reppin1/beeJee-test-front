import * as S from './style';
import { StatusTask } from "../../atoms/StatusTask/StatusTask";
import { TaskField } from "../../atoms/TaskField/TaskField";
import { Button } from "../../atoms/Button/Button";
import { Badge } from "../../atoms/Badge/Badge";
import { Space } from "../../atoms/Space/Space";
import { UserInfo } from "../../atoms/UserInfo/UserInfo";
import { ITaskItemProps } from "./types";

const TaskItem = ({task, admin, refactorTask, updateStatusTask}: ITaskItemProps) => {
  return (
    <S.Card key={task.id}>
      <S.Container>
        <Space align="center">
          <StatusTask updateStatusTask={updateStatusTask} id={task?.id} status={task?.status} />
          {task?.changed &&
            <Badge color="purple">отредактировано администратором</Badge>
          }
          {task?.status &&
            <Badge color="green">Выполнено</Badge>
          }
        </Space>
        <UserInfo name={task.name} email={task.email} />
        {admin?.login &&
          <Button onClick={() => refactorTask(task.id)} size="small">Редактировать</Button>
        }
      </S.Container>
      <TaskField
        css={{ marginTop: 32 }}
        content={task?.task}
      />
    </S.Card>
  );
};

export { TaskItem };