import { ITask } from "../../types/tasks";
import Task from "./Task";
import style from "./List.module.scss";

const List = ({ tasks }: { tasks: ITask[] }): any => {
  return (
    <ul className={style.List}>
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </ul>
  );
};

export default List;
