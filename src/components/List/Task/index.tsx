import { ITask } from "../../../types/tasks";
import style from "./Task.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Task = ({ id, name, time, finish, selected, selectTask }: Props): any => {
  return (
    <li
      className={`${style.card} 
        ${selected ? style.taskSelected : ""} 
        ${finish ? style.taskSelected : ""}
      `}
      onClick={() =>
        !finish &&
        selectTask({
          name,
          time,
          selected,
          finish,
          id,
        })
      }
    >
      <div className={style.taskFlag}>
        <h3>{name}</h3>
        {finish && <p className={style.flag}>TAREFA CONCLUIDA</p>}
      </div>

      <p>{time}</p>
    </li>
  );
};

export default Task;
