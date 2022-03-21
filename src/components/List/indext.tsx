import { ITask } from "../../types/tasks";
import Task from "./Task";

const List = ({ tasks }: { tasks: ITask[] }): any => {
  return (
    <aside className='task_list'>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
