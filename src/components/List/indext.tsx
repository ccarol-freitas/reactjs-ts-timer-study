import { ITask } from "../../types/tasks";
import Task from "./Task";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

const List = ({ tasks, selectTask }: Props): any => {
  return (
    <ul className={style.list}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} selectTask={selectTask} />
      ))}
    </ul>
  );
};

export default List;
