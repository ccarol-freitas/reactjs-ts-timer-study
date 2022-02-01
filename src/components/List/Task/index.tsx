const Task = ({ name, time }: { name: string; time: string }): any => {
  return (
    <li className="task_item">
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Task;
